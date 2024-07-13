require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = async(req,res,next) =>{
     try {
        const {authorization} = req.headers;
        if(!authorization) return res.status(400).json({message:"Please include Authorization header"});
        const [,token] = authorization.split(" ");
        if(!token) return res.status(400).json({message:"Please include token to request"});
        const tokenPayload = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = {
            userId : tokenPayload?.adminId || tokenPayload?.teacherId || tokenPayload?.studentId,
            userEmail : tokenPayload?.email,
            userName : tokenPayload?.name || "",
            userRole : tokenPayload?.role || ""
        }

        next();

     } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:error.message,message:"error in authMiddleware"})
     }
};

module.exports = {authMiddleware}