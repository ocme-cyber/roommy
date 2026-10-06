import propertyRepository from "./property.repository.js";

export const addProperty = async (property: any, files: Express.Multer.File[], ownerId: number) => {
    const imageUrls = files ? files.map(file => `/uploads/${file.filename}`) : [];
    
    property.ownerId = ownerId
    property.images = imageUrls
    property.typeOfRent = property.isLongTerm && property.isShortTerm ? "both" : property.isShortTerm ? "shortTerm" : "longTerm"
    property.isLongTerm && property.isShortTerm ? delete property.isLongTerm && delete property.isShortTerm : property.isShortTerm ? delete property.isShortTerm: delete property.isLongTerm
    return await propertyRepository.create(property)
}

export const getAllPropertys = async () => {
    return await propertyRepository.getAll()
}

export const getProperty = async (id: string) => {
    return await propertyRepository.getRoom(id)
}

export const getRoomsOfUser = async (ownerId: string) => {
    return await propertyRepository.getAllOfUser(ownerId)
}

export const getThird = async () => {
    return await propertyRepository.getThird()
}