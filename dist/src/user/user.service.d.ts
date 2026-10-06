import type { registerBody, loginUserInterface } from "./user.interfaces.js";
export declare const registerUser: (body: registerBody) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    username: string | null;
    login: string;
    password: string;
}>;
export declare const loginUser: (body: loginUserInterface) => Promise<{
    token: string;
    user: {
        id: string;
        username: string | null;
        login: string;
    };
}>;
//# sourceMappingURL=user.service.d.ts.map