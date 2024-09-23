const express = require("express");
const app = express();

const {UserRouter} = require("./Router/userRouter");
const {AuthRouter} = require('./Router/authRouter');

app.use("/user",UserRouter);
app.use("/auth",AuthRouter);

module.exports = {rootRouter:app};