let mongoose=require("mongoose")

let userschema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["ADMIN", "TEACHER", "STUDENT"],
        default:"ADMIN",
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
    },
    updatedBy:{
        type:mongoose.Schema.Types.ObjectId,
    }
},{timestamps:true})
const User=mongoose.model("users",userschema)

module.exports={User};