const express = require("express");
const app = express();

const {AdminRouter} = require("./Router/adminRouter");

app.use("/admin",AdminRouter);

module.exports = {rootRouter:app};