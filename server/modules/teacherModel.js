let mongoose=require("mongoose")

let dataschema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    role:String,
    phone:Number,
    qualification:String,
    salary:Number,
    password:String
})
let teacherlist=mongoose.model("teacherlist",dataschema)

module.exports=teacherlist