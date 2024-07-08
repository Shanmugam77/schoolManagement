const express = require("express");
const router = express.Router();
const adminController = require("../Controller/adminController");

router.post("/",adminController.addAdmin);
router.get("/",adminController.getAllAdmin);
router.get("/:id",adminController.getAdminById);
router.put("/:id",adminController.editAdmin);
router.delete("/:id",adminController.deleteAdmin);

module.exports = {AdminRouter:router};