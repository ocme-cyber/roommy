import * as propertyService from "./property.sevice.js";
export const getAddPropertyPage = (req, res) => {
    res.render("property/addPropertyPage");
};
export const getPropertyCatalogPage = async (req, res) => {
    const rooms = await propertyService.getAllPropertys();
    res.render("property/propertyCatalog", { rooms });
};
export const getPropertyPage = async (req, res) => {
    const roomId = req.params.id;
    const room = await propertyService.getProperty(roomId);
    res.render("property/propertyPage", { room });
};
export const addNewProperty = async (req, res) => {
    try {
        const files = req.files;
        const ownerId = req.user?.id;
        await propertyService.addProperty(req.body, files, ownerId);
        res.status(200).json({ message: "add " });
    }
    catch (e) {
        res.status(403).json({ error: e });
    }
};
//# sourceMappingURL=property.controllers.js.map