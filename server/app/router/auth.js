import { Router } from "express";
import { validate } from "../middlewares/validationHandler.js";
import {
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
  userSchema,
  verifySchema,
} from "../validators/auth.js";
import {
  checkAuth,
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from "../controllers/auth.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const authRouter = Router();

authRouter.get("/check-auth", verifyToken, checkAuth);

authRouter.post("/signup", validate(userSchema), signup);
authRouter.post("/logout", logout);
authRouter.post("/login", validate(loginSchema), login);

authRouter.post("/verify-email", validate(verifySchema), verifyEmail);
authRouter.post(
  "/forgot-password",
  validate(forgotPasswordSchema),
  forgotPassword
);

authRouter.post(
  "/reset-password/:token",
  validate(resetPasswordSchema),
  resetPassword
);

export default authRouter;
