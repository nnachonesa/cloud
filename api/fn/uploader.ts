import multer from "multer";
import { LOCAL_PATH } from "../constants";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, LOCAL_PATH);
    },
    filename: (req, file, cb) => {
        var fileending: string[] | string, filename: string
        fileending = String(file.originalname).split(".")
        fileending = String(fileending[fileending.length - 1])
        filename = String(Date.now() + '.' + fileending)
        cb(null, String(filename));
    }
})
export const upload = multer({ storage })