import type { registerBody, loginUserInterface } from "./user.interfaces.js";
import { userRepository } from "./user.repository.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const registerUser = async (body: registerBody) => {
    const candidate = await userRepository.findByLogin(body.login)
    if (candidate) {
        throw new Error("User with this login alredy exists")
    }
    return await userRepository.create(body)
}

export const loginUser = async (body: loginUserInterface) => {
    const user = await userRepository.findByLogin(body.login)
    console.log(user)
    if(!user) {
        throw new Error("User with this login do not exists")
    }
    
    console.log(user.password)
    console.log(body.password)
    if(user.password != body.password) {
        throw new Error("This password is not valid")
    }
    const payload = {
        id: user.id,
        login: user.login,
        username: user.username
    }

    const secret = process.env.JWT_SECRET || ""
    const token = jsonwebtoken.sign(payload, secret, {
        expiresIn: '1d'
    });

    return {
        token, 
        user: {
            id: user.id,
            username: user.username,
            login: user.login
        }
    }
}

