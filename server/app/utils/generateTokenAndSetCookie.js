import jwt from "jsonwebtoken";
import config from "../../config/index.js";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: config.env === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return token;
};
