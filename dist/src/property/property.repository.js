import prisma from "../lib/prisma.js";
export const propertyRepository = {
    create: async (data) => {
        return await prisma.property.create({ data });
    },
    getAll: async () => {
        return await prisma.property.findMany({ orderBy: { createdAt: 'desc' } });
    },
    getRoom: async (id) => {
        return await prisma.property.findUnique({ where: { id } });
    },
    getAllOfUser: async (ownerId) => {
        return await prisma.property.findMany({ where: { ownerId } });
    },
    getThird: async () => {
        return await prisma.property.findMany({ take: 3 });
    }
};
export default propertyRepository;
//# sourceMappingURL=property.repository.js.map