import { RequestExt } from "../interfaces/req-ext";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
  destination(req: RequestExt, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: RequestExt, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRamdon = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRamdon);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;
