const express = require("express");
const router = express.Router();
const adminController = require("../Controller/adminController");
const { authMiddleware } = require("../Middleware/authMiddleware");
const { adminMiddleware } = require("../Middleware/adminMiddleware");


router.post("/",authMiddleware, adminMiddleware, adminController.addAdmin);
router.get("/",authMiddleware, adminMiddleware,adminController.getAllAdmin);
router.get("/:id",authMiddleware, adminMiddleware,adminController.getAdminById);
router.put("/:id",authMiddleware, adminMiddleware,adminController.editAdmin);
router.delete("/:id",authMiddleware, adminMiddleware,adminController.deleteAdmin);

module.exports = {AdminRouter:router};