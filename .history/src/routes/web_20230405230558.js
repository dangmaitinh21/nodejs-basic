import { getHomePage } from "../controller/homeController";

const configRoutes = (app) => {
  app.get("/", getHomePage);
  return app.use("/", router);
};
