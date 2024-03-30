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
const User = mongoose.model("UserInfo");

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
})