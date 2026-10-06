import * as userService from "./user.service.js";
import { getRoomsOfUser } from "../property/property.sevice.js";
import e from "express";
export const getLoginPage = (req, res) => {
    res.render("user/loginPage");
};
export const getRegisterPage = (req, res) => {
    res.render("user/registerPage");
};
export const getProfilePage = async (req, res) => {
    const user = req.user;
    const myRooms = await getRoomsOfUser(user?.id);
    console.log(myRooms);
    res.render('user/userProfile', {
        user: user,
        myRooms: myRooms
    });
};
export const registerUser = async (req, res) => {
    try {
        await userService.registerUser(req.body);
        return res.status(200).json({
            answer: "register"
        });
    }
    catch (e) {
        console.log(e);
        return res.status(400);
    }
};
export const loginUser = async (req, res) => {
    try {
        const result = await userService.loginUser(req.body);
        res.cookie("token", result.token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        return res.status(200).json({
            message: 'Успешный вход',
            user: result.user
        });
    }
    catch (e) {
        console.log(e);
        return res.status(401).json({
            error: e
        });
    }
};
export const userLogout = (req, res) => {
    try {
        res.clearCookie("token");
        res.status(201).json({ message: "Succesful logout" });
    }
    catch (e) {
        console.log(e);
        res.status(403).json({ error: e });
    }
};
//# sourceMappingURL=user.controllers.js.map