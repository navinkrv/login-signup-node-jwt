// import express from "express";
// import mongoose from "mongoose";
const express= require("express")
const mongoose= require("mongoose")
// import router from "./routes/user-routes.js";
// import blogRouter from "./routes/blog-routes";
const router = require("./routes/user-routes")
const mailRouter = require("./routes/mailRoutes")

const app=express();
app.use(express.json())
app.use("/api/user",router)
app.use("/api/mailer",mailRouter)



mongoose.connect('mongodb+srv://navinkey5:NvSBjCywRoYc87Cd@cluster0.kyizd86.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    app.listen( 5000 ); 
}).then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})
// OKEsyJ1ZR0rrgmJ8 mongo pass| navinkrv



// --experimental-modules --es-module-specifier-resolution=node