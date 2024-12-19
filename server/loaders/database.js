import mongoose from "mongoose";
import config from "../config/index.js";
 
export default async () => {
  try {
    const connection = await mongoose.connect(config.mongoUri);
    console.log(`MongoDB Connected: ${connection.connection.host}`)
  } catch (error) {
    console.log("Error connection to mongoDB:", error);
    process.exit(1)
  }
};
