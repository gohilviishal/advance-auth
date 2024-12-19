import { Router } from "express";
import { validate } from "../middlewares/validationHandler.js";
import { userSchema } from "../validators/auth.js";
import { signup } from "../controllers/auth.js";

const authRouter = Router();

authRouter.post("/signup", validate(userSchema), signup);  

export default authRouter;
