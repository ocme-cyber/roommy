import jsonwebtoken from "jsonwebtoken";
export const catalogMiddleware = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        res.redirect("/user/login");
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
//# sourceMappingURL=catalog.middleware.js.map