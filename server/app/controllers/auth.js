import asyncHandler from "express-async-handler";
import { User } from "./../models/user.js";
import createHttpError from "http-errors";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../../email/emails.js";

export const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw createHttpError("User already exist with this email.");
  }
  const hashedPassword = await bcryptjs.hash(password, 10);
  const verificationToken = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  const user = new User({
    email,
    password: hashedPassword,
    name,
    verificationToken,
    verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 Hours
  });
  await user.save();

  generateTokenAndSetCookie(res, user._id);

  await sendVerificationEmail(user.email, verificationToken);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: {
      ...user._doc,
      password: undefined,
    },
  });
});
export const login = asyncHandler((req, res) => {});
export const logout = asyncHandler((req, res) => {});
