const express = require("express");
const router = express.Router();
const {login} = require("../Controller/authController");

router.post("/login",login);

module.exports = {AuthRouter : router}