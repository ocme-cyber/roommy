import type { registerBody } from "./user.interfaces.js";
export declare const userRepository: {
    create: (data: registerBody) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        username: string | null;
        login: string;
        password: string;
    }>;
    findByLogin: (login: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        username: string | null;
        login: string;
        password: string;
    } | null>;
};
//# sourceMappingURL=user.repository.d.ts.map