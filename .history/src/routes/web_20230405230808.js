import express from "express";
import { getHomePage } from "../controller/homeController";

const configRoutes = (app) => {
  const router = express.Router();
  router.get("/", getHomePage);
  return app.use("/", router);
};

export default configRoutes;
