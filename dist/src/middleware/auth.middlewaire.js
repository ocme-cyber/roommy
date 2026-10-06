import jsonwebtoken from "jsonwebtoken";
export const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return next();
    }
    try {
        const secret = process.env.JWT_SECRET || "";
        const decoded = jsonwebtoken.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (e) {
        return res.status(401).json();
    }
};
//# sourceMappingURL=auth.middlewaire.js.map