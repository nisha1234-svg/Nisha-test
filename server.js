const express = require("express");
const app = require();
const connectDb = require("./config/db");
const userModel = require("./model/userSchema");

connectDb();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("HEllo");
});


app.post ("/register",async(req,res)=>{
    const {name,email,contectnumber} = req.body;
    const userExist=await userModel.findOne({email})
    console.log(userExist)
});

app.listen(4000,()=>{
    console.log("server is running...")
}
);
