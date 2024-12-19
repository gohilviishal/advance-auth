import globalErrorHandler from "../app/middlewares/globalErrorHandler.js";
import router from "../app/router/index.js";
import config from "../config/index.js";
import express from "express";

export default (app) => {
  app.use(express.json());

  // allow us to parse incoming requests with JSON payloads
  app.use(`/${config.endpointPrifix}`, router);
  app.use(globalErrorHandler)
};
