const express = require("express");
const app = express();

const {AdminRouter} = require("./Router/adminRouter");
const {AuthRouter} = require('./Router/authRouter');

app.use("/admin",AdminRouter);
app.use("/auth",AuthRouter);

module.exports = {rootRouter:app};