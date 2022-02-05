import express from "express";
import chatBotController from "../controllers/chatBotController";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/webhook", chatBotController.getWebHook)
  router.post("/webhook", chatBotController.postWebHook)
  return app.use('/', router);
};

module.exports = initWebRoutes;