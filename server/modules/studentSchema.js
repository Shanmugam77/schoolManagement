let mongoose=require("mongoose")

let dataschema=new mongoose.Schema({
    studentid:String,
    name:String,
    age:Number,
    gender:String,
    std:String,
    phone:Number,
    password:String
})
let studentlist=mongoose.model("studentlist",dataschema)

module.exports=studentlist