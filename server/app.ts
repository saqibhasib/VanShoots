const express=require('express');

const bodyParser = require("body-parser");
const cors = require('cors');

import { Request, Response } from 'express';


const app=express();

app.use(cors());

app.use(bodyParser.json()); // content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // content-type - application/x-www-form-urlencoded

app.get("/api", (req:Request, res:Response) => {
    res.json({ message: "default page for the server"});
});

let PORT = 5003;
app.listen(PORT,()=>{
    console.log(`App is running on localhost ${PORT}.`);
});