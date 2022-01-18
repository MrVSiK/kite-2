import type { RequestHandler } from "express";
import { verify, sign } from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import User from "../models/User";
import { handleMongoError } from "./errors";

export const DecodeJWT: RequestHandler = (req, res) => {
    const token = req.params.token;
    verify(token, process.env.SECRET as string, (err, decodedToken) => {
        if (err) {
            req.log.error(err.name)
            return res.status(401).json({
                message: "Invalid Token",
                error: err.name
            });
        }
        res.status(200).json(decodedToken)
    })
};


export const LoginHandler: RequestHandler = (req, res) => {
    const email = req.body.emailID as string;
    const password = req.body.password as string;
    User.findOne({email: email}).then(doc => {
        if(doc){
            compare(password, doc.password, (err, result) => {
                if(err){
                    req.log.error(err.name)
                    return res.status(500).json({
                        message: "Unable to Authenticate",
                        error: err.name
                    })
                }
                if(result){
                    return res.status(200).json({
                        token: sign({ email: email, username: doc.username }, process.env.SECRET as string, { expiresIn: 30 * 60 })
                    })
                }
                return res.status(401).json({
                    message: "Invalid username or password"
                })
            })
        } else {
            res.status(401).json({
                message: "Invalid User"
            })
        }
    }).catch(err => {
        handleMongoError(err, res);
    })
}

export const RegisterHandler: RequestHandler = (req, res) => {
    const email = req.body.emailID as string;
    const password = req.body.password as string;
    const username = req.body.username as string;
    hash(password, 10, (err, hash) => {
        if(err){
            req.log.error(err.name)
            return res.status(500).json({
                message: "Unable to accept password",
                error: err.name
            })
        }
        const user = new User({
            email: email,
            password: hash,
            username: username
        });
        user.save().then(() => {
            res.status(200).json({
                message: "Successfully resgistered"
            })
        }).catch(err => {
            handleMongoError(err, res);
        })
    })
}