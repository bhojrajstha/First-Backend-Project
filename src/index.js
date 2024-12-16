//require('dotenv').config({path: "./env"})
import dotenv from 'dotenv'
dotenv.config({
    path:"./env"
})
import connectDB from "./db/index.js"

connectDB()











/*
import express from 'express'
const app = express();

;( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
       app.on("error",(error) => {
       console.log("errorin connecting with express:",error)
       throw error
       })
       app.listen(process.env.PORT,() => {
        console.log(`your server is listening to port:${process.env.PORT}`)
       })
    } catch (error) {
        console.error("failed to connect with database",error)
         throw err
    }
    })()*/