import * as homeService from "./home.sevice.js";
import { getThird } from "../property/property.sevice.js";
export const getHomePage = async (req, res) => {
    const user = req.user;
    const rooms = await getThird();
    res.render('home/homePage', { user, rooms });
};
//# sourceMappingURL=home.controllers.js.map