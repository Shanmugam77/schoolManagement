let mongoose=require("mongoose")

let dataschema=new mongoose.Schema({
    phone:Number,
    password:String
})
let studentlist=mongoose.model("admin",dataschema)

module.exports=studentlist