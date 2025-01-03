const mongoose =require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    }
    ,email:{
        type:String,
        require:true
    }
    ,contectnumber:{
        type:number,
        require:true
    }
})
const userModel=Mongoose.Model("user",userScheema)
