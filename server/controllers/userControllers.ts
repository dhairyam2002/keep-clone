import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";

export const register = async (req : Request, res : Response, next : Function) => {
    try {
        const user = await User.create({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        if(!user) return res.status(400).json({success: false, message: JSON.stringify(user)});

        res.status(201).json({
            success: true,
            user
        })
    } catch (error : any) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }   
}

export const login = async (req : Request, res : Response, next : Function) => {
    try {
        
    } catch (error) {
        
    }
}