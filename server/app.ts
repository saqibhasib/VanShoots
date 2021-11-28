const express=require('express');

const bodyParser = require("body-parser");
const cors = require('cors');

import { Request, Response } from 'express';
import mongoose, { ConnectOptions, Error, Mongoose, Number } from "mongoose";
import User from './src/models/user.model';


const app=express();

app.use(cors());

const connectDB = async () => {
    await mongoose
        .connect(`mongodb://localhost:27017/fourheads`, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
        .then(() => {
            initial();
            console.log("Successfully connected to MongoDB.");
        }) 
        .catch(err => {
            console.error("Connection error", err);
        });
};

connectDB();

const initial = async () => {
    let user = await User.findOne({username: "admin"});
    if (!user) {
        let newAdmin = new User({
            username: "admin",
            password: "1234",
            roles: ["user", "admin"],
        });
        newAdmin = await newAdmin.save();
    }
}

app.use(bodyParser.json()); // content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // content-type - application/x-www-form-urlencoded

app.get("/api", (req:Request, res:Response) => {
    res.json({ message: "default page for the server"});
});

let PORT = 5003;
app.listen(PORT,()=>{
    console.log(`App is running on localhost ${PORT}.`);
});