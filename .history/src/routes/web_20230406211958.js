import express from "express";
import {
  getHomePage,
  getDetailPage,
  postUser,
  delUser,
} from "../controller/homeController";

const configRouter = (app) => {
  const router = express.Router();
  router.get("/", getHomePage);
  router.get("/detail/:userId", getDetailPage);
  router.post("/create-new-user", postUser);
  router.delete("/delete-user/:userId", (req, res) => {
    console.log("cc");
  });
  return app.use("/", router);
};

export default configRouter;
