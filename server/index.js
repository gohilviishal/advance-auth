import app from './app.js'
import config from "./config/index.js";

const startServer = () => {
  app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
  });
};

startServer();
