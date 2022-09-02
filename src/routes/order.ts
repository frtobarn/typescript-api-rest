import { Router } from "express";
import { getOrder } from "../controllers/orders";
import { checkJwt } from "../middlewares/sessions";

const router = Router()

router.get("/", checkJwt ,getOrder )

export {router}