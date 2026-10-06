import prisma from "../lib/prisma.js";
export const userRepository = {
    create: async (data) => {
        console.log("123");
        return await prisma.user.create({ data });
    },
    findByLogin: async (login) => {
        return await prisma.user.findUnique({ where: { login } });
    }
};
//# sourceMappingURL=user.repository.js.map