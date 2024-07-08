const { Admin } = require("../modules/adminModel");
const {AdminService} = require("../service/adminService")
const { hashPassword } = require("../utils/bcryptUtil");

class AdminController{
    async addAdmin(req,res){
        try {
            const {firstName, lastName, email, password} = req.body;
            if(!firstName) return res.status(400).json({message:"FirstName required"});
            if(!lastName) return res.status(400).json({message:"LastName required"});
            if(!email) return res.status(400).json({message:"Email required"});
            if(!password) return res.status(400).json({message:"Password required"});

            if (await Admin.findOne({email})) {
                return res.status(400).json({message:"Email already in use"});
            }

            const hashPass = await hashPassword(10,password);
            // const {userId} = req.user;

            let data = req.body;
            data.password = hashPass;
            // data.createdBy = userId || "";

            const newData = await AdminService.createAdmin(data);
            return res.status(201).json({user:newData,message:"Admin created successfully"});
            
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({error:error.message});
        }
    };

    async getAllAdmin(req,res){
        try {
            const admins = await AdminService.getAllAdmin();
            return res.status(200).json({admins});
        } catch (error) {
            console.log(error);
            return res.status(500).json({error:error.message});
        }
    }

    async getAdminById(req,res){
        try {
            const Id = req.params.Id;
            const admin = await AdminService.getAdminById(Id);
            return res.status(200).json({admin});
        } catch (error) {
            console.log(error);
            return res.status(500).json({error:error.message});
        }
    }

    async editAdmin(req,res){
        try {
            const Id = req.params.Id;
            const {firstName, lastName, email, password} = req.body;
            if(!firstName) return res.status(400).json({message:"FirstName required"});
            if(!lastName) return res.status(400).json({message:"LastName required"});
            if(!email) return res.status(400).json({message:"Email required"});
            if(!password) return res.status(400).json({message:"Password required"});

            // const {userId} = req.user;
            const data = req.body;
            // data.updatedBy = userId;
            const updatedData = await AdminService.updateAdmin(Id,data);
            if (!updatedData) return res.status(400).json({message:"Failed to update Admin"});
            return res.status(200).json({message:"Admin updated successfully"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({error:error.message});
        }
    }

    async deleteAdmin(req,res){
        try {
            const Id = req.params.Id;
            await AdminService.deleteAdmin(Id);
            return res.status(200).json({message:"Admin deleted successfully"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({error:error.message});
        }
    }

}

module.exports = new AdminController();