const {Admin} = require("../modules/adminModel");

const createAdmin = async(data) => {
   try {
    let newData = new Admin(data);
    newData = await newData.save();
    return newData;
   } catch (error) {
    throw error;
   }
};

const getAllAdmin = async() => {
    try {
        const admins = await Admin.find();
        return admins;
    } catch (error) {
        throw error;
    }
};

const getAdminById = async(id) => {
    try {
        const admin = await Admin.findById(id);
        return admin;
    } catch (error) {
        throw error;
    }
};

const updateAdmin = async(id,data) => {
    try {
        const updatedData = await Admin.findByIdAndUpdate(id,{$set:data});
        return updatedData;
    } catch (error) {
        throw error;
    }
};

const deleteAdmin = async(id) => {
    try {
        await Admin.findByIdAndDelete(id)
        return;
    } catch (error) {
        throw error;
    }
};

module.exports = {AdminService:{createAdmin, getAdminById, getAllAdmin, updateAdmin, deleteAdmin}};