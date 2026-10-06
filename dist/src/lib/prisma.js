import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import dotenv from "dotenv";
import path from "path";
const __dirname = import.meta.dirname;
dotenv.config({
    path: path.join(__dirname, '..', '..', '..', '.env')
});
const databaseURL = process.env.DATABASE_URL;
if (!databaseURL) {
    console.error("DATABASE_URL is not defined on ");
}
const adapter = new PrismaPg({
    connectionString: databaseURL
});
const prisma = new PrismaClient({
    adapter
});
export default prisma;
//# sourceMappingURL=prisma.js.map