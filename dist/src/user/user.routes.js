import express from "express";
import * as userControllers from "./user.controllers.js";
const userRouter = express.Router();
const jsonParser = express.json();
userRouter.get('/login', userControllers.getLoginPage);
userRouter.get('/register', userControllers.getRegisterPage);
userRouter.get('/profile', userControllers.getProfilePage);
userRouter.delete("/api/logout", jsonParser, userControllers.userLogout);
userRouter.post('/api', jsonParser, userControllers.registerUser);
userRouter.post('/api/login', jsonParser, userControllers.loginUser);
export default userRouter;
//# sourceMappingURL=user.routes.js.map