import express from "express"
import mongoose from "mongoose"
import userModel from "./models/users.js"

const app = express();
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log(`Connect to Mongo DB`)
    })
    .catch((error)=>{
        console.error(error)
    })