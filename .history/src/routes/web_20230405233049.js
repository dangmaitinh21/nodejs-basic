import express from "express";
import { getHomePage, getDetailPage } from "../controller/homeController";

const configRouter = (app) => {
  const router = express.Router();
  router.get("/", getHomePage);
  router.get("/detail/:userId", getDetailPage);
  return app.use("/", router);
};

export default configRouter;
