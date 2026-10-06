import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    }
    else {
        cb(new Error("Разрешены только изображения"), false);
    }
};
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fieldSize: 25 * 1024 * 1024
    }
});
export default upload;
//# sourceMappingURL=upload.middleware.js.map