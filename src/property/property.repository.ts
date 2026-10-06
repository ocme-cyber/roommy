import prisma from "../lib/prisma.js";

export const propertyRepository = {
    create: async(data: any) => {
        return await prisma.property.create({data})
    },
    getAll: async() => {
        return await prisma.property.findMany({ orderBy: {createdAt: 'desc'} })
    },
    getRoom: async(id: string) => {
        return await prisma.property.findUnique({ where: { id }})
    },
    getAllOfUser: async (ownerId: string) => {
        return await prisma.property.findMany({ where: {ownerId}})
    },
    getThird: async () => {
        return await prisma.property.findMany({ take: 3})
    }
}

export default propertyRepository