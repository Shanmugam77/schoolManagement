require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser=require("body-parser");
const {rootRouter} = require("./router");

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json({limit:"50mb"}));
app.use(rootRouter);

async function connectDB(){
 try {
    await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log("Database connected");
 } catch (error) {
    console.log("Failed to connect DB :", error.message);
 }
}

const Port = process.env.PORT || 8000 ;

async function startServer(){
    try {
        app.listen(Port,()=>{
            console.log(`Server listening at port no ${Port}`);
        })
    } catch (error) {
        console.log("Failed to startServer :",error.message);
    }
}

connectDB();
startServer();
