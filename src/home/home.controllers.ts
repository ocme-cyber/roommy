import * as homeService from "./home.sevice.js"
import type { Request, Response } from "express"
import { getThird } from "../property/property.sevice.js"

export const getHomePage = async(req: Request, res: Response) => {
    const user = req.user
    const rooms = await getThird()
    res.render('home/homePage', { user, rooms })
}
