import express from "express"
import upload from "../middlewares/upload.middleware.js";
import * as propertyController from "./property.controllers.js"
import { catalogMiddleware } from "../middlewares/catalog.middleware.js";

const propertyRouter = express.Router();

propertyRouter.use('/', catalogMiddleware)

propertyRouter.get("/addProperty", propertyController.getAddPropertyPage)
propertyRouter.get("/catalog", catalogMiddleware, propertyController.getPropertyCatalogPage)
propertyRouter.get("/:id", propertyController.getPropertyPage)

propertyRouter.post("/add", upload.array("images", 10), propertyController.addNewProperty)

export default propertyRouter;