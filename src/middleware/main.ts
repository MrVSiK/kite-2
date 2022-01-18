import { RequestHandler } from "express";

export const check2Parameters: RequestHandler = (req, res, next) => {
    const { emailID, password } = req.body;
    if(!emailID || !password){
        req.log.info(`2 Parameters failed: ${req.ip}`);
        return res.status(400).json({
            message: 'Email or password missing'
        })
    }
    next();
};


export const check3Parameters: RequestHandler = (req, res, next) => {
    const { emailID, password, username } = req.body;
    if(!emailID || !password || !username){
        req.log.info(`3 Parameters failed: ${req.ip}`);
        return res.status(400).json({
            message: 'Email or password or username missing'
        })
    }
    next();
}