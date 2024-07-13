const {Admin} = require("../modules/adminModel")

const adminMiddleware = async(req,res,next) => {
   try {
    const {userId} = req.user;
    if(!await Admin.findById(userId)) return res.status(400).json({message:"Admin only have access"});
    next();
   } catch (error) {
    console.log(error.message);
    return res.status(500).json({error:error.message,message:"error in adminMiddleware"});
   }
};

module.exports = {adminMiddleware};