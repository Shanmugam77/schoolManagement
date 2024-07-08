let mongoose=require("mongoose")

let adminschema=new mongoose.Schema({
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
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
    },
    updatedBy:{
        type:mongoose.Schema.Types.ObjectId,
    }
},{timestamps:true})
const Admin=mongoose.model("admin",adminschema)

module.exports={Admin};