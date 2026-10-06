import { JwtPayload } from "jsonwebtoken";

interface CustomUserPayload extends JwtPayload {
  id: string;
  login: string;
username: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: CustomUserPayload | JwtPayload;
    }
  }
}