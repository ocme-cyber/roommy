import express from "express"
import dotenv from "dotenv"
import path from "path"
import cookieParser from "cookie-parser"
import homeRouter from "./home/home.routes.js"
import userRouter from "./user/user.routes.js"
import propertyRouter from "./property/property.routes.js"
import type { PrismaClient } from "./generated/prisma/client.js"
import { authMiddleware } from "./middlewares/auth.middleware.js"
const __dirname = import.meta.dirname
const app = express();


type ContextWithPrisma = {
    Variables: {
        prisma: PrismaClient
    }
}
dotenv.config({ path: path.join(__dirname, "..", '..', '.env') });
const PORT = process.env.PORT || 3111

// app.use((req, res, next) => {
//     console.log(`[СЕРВЕР] Пришел запрос: ${req.method} на адрес ${req.url}`);
//     next();
// });

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(cookieParser())
app.use(authMiddleware)
app.use(express.static("public"))

app.use('/', homeRouter)
app.use('/user', userRouter)
app.use("/property", propertyRouter)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})