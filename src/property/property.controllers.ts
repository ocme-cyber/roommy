import type { Request, Response } from "express";
import * as propertyService from "./property.sevice.js"

export const getAddPropertyPage = (req: Request, res: Response) => {
    res.render("property/addPropertyPage")
}

export const getPropertyCatalogPage = async (req: Request, res:  Response) => {
    const rooms = await propertyService.getAllPropertys()
    res.render("property/propertyCatalog", { rooms })
}

export const getPropertyPage = async (req: Request, res: Response) => {
    const roomId = req.params.id as string
    const room = await propertyService.getProperty(roomId)
    

    res.render("property/propertyPage", { room })

}

export const addNewProperty = async (req: Request, res: Response) => {
    try {
        const files = req.files as Express.Multer.File[]
        const ownerId = req.user?.id
        await propertyService.addProperty(req.body, files, ownerId)
        res.status(200).json({ message: "add "})
    } catch (e) {
        res.status(403).json({error : e})
    }
    
}