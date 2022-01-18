import { Router } from "express";
const router = Router();
import { DecodeJWT, LoginHandler, RegisterHandler } from "../handlers/main";
import { checkToken } from "../middleware/checkToken";

router.get("/try/access/:token", checkToken, DecodeJWT);


router.post("/login", LoginHandler);


router.post("/register", RegisterHandler);

export default router;