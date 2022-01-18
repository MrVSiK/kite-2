import { Router } from "express";
const router = Router();
import { DecodeJWT, LoginHandler, RegisterHandler } from "../handlers/main";
import { check2Parameters, check3Parameters } from "../middleware/main";


router.get("/try/access/:token", DecodeJWT);


router.post("/login", check2Parameters, LoginHandler);


router.post("/register", check3Parameters, RegisterHandler);

export default router;