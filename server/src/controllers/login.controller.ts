import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import {AUTH_CONFIG, TOKEN_EXPIRE_DURATION} from '../config/config';
import User from "../models/user.model";

const loginController = async (req:Request, res:Response, next:NextFunction) => {
    console.log(req.body);
    await User.find({
            username: req.body.username
        })
        .exec()
        .then((users) => {      
            console.log(users);
            if(users.length !== 1){
                return res.status(404).send({
                    message: "User does not exist!",
                });
            };
            let user = users[0];      
            let isPWSame = user.password.localeCompare(req.body.password);
            if(isPWSame !== 0) {
                return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
            } else {
                let token = jsonwebtoken.sign({ username: user.username}, AUTH_CONFIG.secret, {expiresIn: TOKEN_EXPIRE_DURATION});
                res.status(200).send({
                    username: user.username,
                    roles: user.roles,
                    accessToken: token
                });
            };
        })
        .catch(err => {
            res.status(404).json({
                message: "User not found!"
            })
        });
};

export default loginController;
