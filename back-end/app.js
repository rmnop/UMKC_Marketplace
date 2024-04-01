const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


app.use(express.json());
app.use(cors());

const JWT_SECRET = "kdfkkj23497ksdfjnhks92834hfskdjsdf83w2";
const mongoUrl = "mongodb+srv://teonaabus:Amiran1969!@cluster0.mmxo4if.mongodb.net/";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Failed to connect to MongoDB", err);
});

require("./userDetails");
require("./listings");
const User = mongoose.model("UserInfo");
const Listing = mongoose.model("Listing"); 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.post("/signup", async (req, res) => {
    const { fname, lname, email, password } = req.body;

    const encyrptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser= await User.findOne({email});
        if(oldUser){
            return res.send({error:"User already exists"});
        }
        await User.create({ fname, lname, email, password: encyrptedPassword, });
        res.send({ status: "OK" });
    } catch (error) {
        res.send({ status: "ERROR" });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: "User not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({email: user.email}, JWT_SECRET);
        if(res.status(201)){
            return res.json({ status: "OK", data: token });
        
        }
        else{
            return res.json({ error: "Invalid username/password" });
        
        }
    }
    return res.json({ error: "Invalid username/password" });
});

app.post("/userData", async(req, res) => {
    const {token}=req.body;
    try{
        const user=jwt.verify(token, JWT_SECRET);
        const useremail=user.email;
        User.findOne({email: useremail}).then((data)=>{
            res.send({status:"OK", data:data});
        }).catch((error)=> {
            res.send({status:"ERROR", error:"User not found"});
        })
    }
    catch(error){
        
    }
});
app.get("/api", (req, res) => {
    res.send("Hello World");
})

app.post("/listings", async (req, res) => {
    const { title, description, price, images } = req.body;

    try {
        // Retrieve the token from the request headers
        const token = req.headers.authorization.split(' ')[1];
        
        // Verify the JWT token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Extract the user's email from the decoded token
        const userEmail = decoded.email;
        
        // Find the user based on the email retrieved from the token
        const user = await User.findOne({ email: userEmail });

        // If the user doesn't exist, return an error response
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Create a new listing associated with the user
        const newListing = new Listing({
            title,
            description,
            price,
            images,
            postedBy: user._id,
        });

        // Save the new listing to the database
        await newListing.save();

        // Respond with success status and the new listing data
        res.status(201).json({ status: "OK", data: newListing });
    } catch (error) {
        // If there's an error during token verification or listing creation,
        // log the error to the console and respond with an error message
        console.error("Error creating listing:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
});


app.get("/listings/buy", async (req, res) => {
    try {
        // Fetch all listings from the database
        const listings = await Listing.find();
        
        // Respond with the listings data
        res.status(200).json({ status: "OK", data: listings });
    } catch (error) {
        // If there's an error during fetching listings,
        // log the error to the console and respond with an error message
        console.error("Error fetching listings:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
});
