import dotenv from "dotenv";
dotenv.config();

const _config = {
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 5000,
  endpointPrifix: process.env.ENDPOINT_PREFIX || "api",
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  mailtrapToken: process.env.MAILTRAP_TOKEN,
};

export default Object.freeze(_config);
