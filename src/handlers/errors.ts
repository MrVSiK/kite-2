import { Response } from "express";
import { Error } from "mongoose";

export const handleMongoError = (err: any, res: Response) => {
    if(err instanceof Error.DocumentNotFoundError){
        res.status(401).json({
            message: 'Invalid username'
        })
    } else if(err.code === 11000){
        res.status(401).json({
            message: 'Email or username already exists'
        })
    } else {
        res.status(500).json({
            message: 'Faced an unexpected error',
            error: err.name
        })
    }
}