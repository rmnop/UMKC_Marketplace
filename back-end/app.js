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
require("./imageDetails");
const User = mongoose.model("UserInfo");
const Images=mongoose.model("ImageDetails");

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.post("/signup", async (req, res) => {
    const { fname, email, password } = req.body;

    const encyrptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser= await User.findOne({email});
        if(oldUser){
            return res.send({error:"User already exists"});
        }
        await User.create({ fname, email, password: encyrptedPassword, });
        res.send({ status: "OK" });
        console.alert("Profile Created");
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
            res.send({status:"ERROR", error:"User not found: Invalid Password"});
        })
    }
    catch(error){}
});


app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
      const oldUser = await User.findOne({ email });
      if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
      }
      const secret = JWT_SECRET + oldUser.password;
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
        expiresIn: "5m",
      });
      const link = `http://localhost:3000/reset-password/${oldUser._id}/${token}`;
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "adarsh438tcsckandivali@gmail.com",
          pass: "rmdklolcsmswvyfw",
        },
      });
  
      var mailOptions = {
        from: "youremail@gmail.com",
        to: "thedebugarena@gmail.com",
        subject: "Password Reset",
        text: link,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log(link);
    } catch (error) {}
  });


app.post("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
  
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      const encryptedPassword = await bcrypt.hash(password, 10);
      await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: encryptedPassword,
          },
        }
      );
  
      res.render("index", { email: verify.email, status: "verified" });
    } catch (error) {
      console.log(error);
      res.json({ status: "Something Went Wrong" });
    }
  });

  app.post("/upload-image", async (req, res) => {
    const { base64 } = req.body;
    try {
      await Images.create({ image: base64 });
      res.send({ Status: "ok" });
    } catch (error) {
      res.send({ Status: "error", data: error });
    }
  });
  
  app.get("/get-image", async (req, res) => {
    try {
      await Images.find({}).then((data) => {
        res.send({ status: "ok", data: data });
      });
    } catch (error) {}
  });