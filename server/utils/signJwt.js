require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = async(payload) =>{
    try {
        const responseData = await jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:"30d"});
        return responseData;
    } catch (error) {
        throw error;
    }
    
};

module.exports = {generateToken};