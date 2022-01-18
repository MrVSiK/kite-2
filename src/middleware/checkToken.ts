import type { RequestHandler } from "express";

export const checkToken: RequestHandler = (req, res, next) => {
    try{
        const token = req.params.token;
        if(!token){
            throw "No Token Available";
        }
        next();
    } catch (err){
        res.status(401).json({
            message: err as string
        })
    }
};
