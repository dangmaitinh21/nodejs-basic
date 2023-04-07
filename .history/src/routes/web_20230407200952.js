import express from "express";
import {
  getHomePage,
  getDetailPage,
  postUser,
  delUser,
  editUser,
} from "../controller/homeController";

const configRouter = (app) => {
  const router = express.Router();
  router.get("/", getHomePage);
  router.get("/detail/:userId", getDetailPage);
  router.post("/create-new-user", postUser);
  router.post("/delete-user", delUser);
  router.get("/edit-user/:userId", editUser);
  return app.use("/", router);
};

export default configRouter;
