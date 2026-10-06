import type { Request, Response } from "express";
export declare const getLoginPage: (req: Request, res: Response) => void;
export declare const getRegisterPage: (req: Request, res: Response) => void;
export declare const getProfilePage: (req: Request, res: Response) => Promise<void>;
export declare const registerUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const userLogout: (req: Request, res: Response) => void;
//# sourceMappingURL=user.controllers.d.ts.map