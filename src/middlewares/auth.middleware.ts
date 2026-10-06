import type { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.token

    if (!token) {
            return next();
        }

    try {
        const secret = process.env.JWT_SECRET || ""
        const decoded = jsonwebtoken.verify(token, secret) as { id: string, username: string, login: string};
        req.user = decoded
        next();
    } catch(e) {
        return res.status(401).json()
    }
}