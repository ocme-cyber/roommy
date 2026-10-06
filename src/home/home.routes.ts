import express from "express";
import * as homeControllers from "./home.controllers.js"

const homeRouter = express.Router()
homeRouter.get('/', homeControllers.getHomePage)

export default homeRouter