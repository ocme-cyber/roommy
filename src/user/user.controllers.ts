import type { Request, Response } from "express";
import * as userService from "./user.service.js"
import { getRoomsOfUser } from "../property/property.sevice.js";
import e from "express";

export const getLoginPage = (req: Request, res: Response) => {
    res.render("user/loginPage")
}

export const getRegisterPage = (req: Request, res: Response) => {
    res.render("user/registerPage")
}

export const getProfilePage = async (req: Request, res: Response): Promise<void> => {
    
    const user = req.user 

    const myRooms = await getRoomsOfUser(user?.id)
    console.log(myRooms)
    res.render('user/userProfile', {
    user: user,
    myRooms: myRooms
    });
};
export const registerUser = async (req: Request, res: Response) => {
    try {
        await userService.registerUser(req.body)
        return res.status(200).json({
            answer: "register"
        })
    } catch(e) {
        console.log(e)
        return res.status(400)    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.loginUser(req.body)
        res.cookie("token", result.token,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        return res.status(200).json({
            message: 'Успешный вход',
            user: result.user
        })
    } catch(e) {
        console.log(e)
        return res.status(401).json({
            error: e
        })
    }
}

export const userLogout = (req: Request, res: Response) => {
    try {
        res.clearCookie("token")
        res.status(201).json({ message: "Succesful logout" })
    } catch(e) {
        console.log(e)
        res.status(403).json({ error: e })
    }
}