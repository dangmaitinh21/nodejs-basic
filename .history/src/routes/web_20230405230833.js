import express from "express";
import { getHomePage } from "../controller/homeController";

const configRouter = (app) => {
  const router = express.Router();
  router.get("/", getHomePage);
  return app.use("/", router);
};

export default configRouter;
