require("dotenv").config();
const {Admin} = require("../modules/adminModel");
const {comparePassword} = require("../utils/bcryptUtil");
const {generateToken} = require("../utils/signJwt");

const login = async(req,res) =>{
     try {
        const {email,password} = req.body;
        if(!email || !password) return res.status(400).json({message:"Email and Password required"});
        const isExist = await Admin.findOne({email});
        if (!isExist) {
            return res.status(400).json({message:"User not found with this email"});
        }
        const isPasswordCrt = await comparePassword(password,isExist?.password);
        if(!isPasswordCrt) return res.status(400).json({message:"InCorrect Credentials"});
        const payload = {
            adminId:isExist._id,
            email:isExist?.email,
            name:`${isExist.firstName} ${isExist.lastName}`,
            role:"Admin"
        };
        const token = await generateToken(payload);
        const responseData = {
            userId:isExist._id,
            userName:`${isExist.firstName} ${isExist.lastName}`,
            profileImg:"",
            userRole:"Admin",
            token
        }
        return res.status(200).json({responseData});
     } catch (error) {
        console.log(error.message);
        res.status(500).json({error:error.message});
     }
};

module.exports = {login};