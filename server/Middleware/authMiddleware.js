require("dotenv").config();
const jwt = require("jsonwebtoken");
const {User} = require("../modules/userModel")

const authMiddleware = async(req,res,next) =>{
     try {
        const {authorization} = req.headers;
        if(!authorization) return res.status(400).json({message:"Please include Authorization header"});
        const [,token] = authorization.split(" ");
        if(!token) return res.status(400).json({message:"Please include token to request"});
        const tokenPayload = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!await User.findById(tokenPayload?.userId)) return res.status(400).json({message:"Your not a valid user"})
        req.user = {
            userId : tokenPayload?.userId,
            userEmail : tokenPayload?.email,
            userName : tokenPayload?.name,
            userRole : tokenPayload?.role
        }

        next();

     } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:error.message,message:"error in authMiddleware"})
     }
};

module.exports = {authMiddleware}