import { Router } from "express";
import { getFile } from "../controllers/uploads";
import multerMiddleware from "../middlewares/file";
import { checkJwt } from "../middlewares/sessions";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };
