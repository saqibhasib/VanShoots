import { Router, Request, Response, NextFunction } from 'express';
import loginController from '../controllers/login.controller';

const loginRouter = Router();

loginRouter.use((req:Request, res:Response, next:NextFunction) => {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers", 
        "x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();
});

loginRouter.post('/login', [], loginController);

export default loginRouter;