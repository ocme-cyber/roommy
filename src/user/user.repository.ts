import prisma from "../lib/prisma.js";
import type { registerBody } from "./user.interfaces.js";

export const userRepository = {
    create: async (data: registerBody) => {
        console.log("123")
        return await prisma.user.create({data})
    },
    findByLogin: async(login: string) => {
        return await prisma.user.findUnique({ where: { login }})
    }
}

