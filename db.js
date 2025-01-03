const mongoose = require('mongoose')
const uri="mongodb+srv://sheikhnisha970:<db_gWZC2RPgMdHwestV>@cluster0.y22bv.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0"
function connectDb(){
    mongoose
    .connect(uri)
    .then(()=>console.log("connect to the mongoDb database"))
    .catch((err)=> console.log("connection error,err"));
}
module.export = connection;
