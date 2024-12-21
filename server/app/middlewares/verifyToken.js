import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw createHttpError(401, "Unauthorized - no token provided");
  }
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    if (!decoded) {
      throw createHttpError(401, "Unauthorized - invalid token");
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {}
};