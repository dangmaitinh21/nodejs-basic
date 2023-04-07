import express from "express";
import configViewEngine from "./configs/viewEngine";
import { getHomePage } from "./controller/homeController";

require("dotenv").config();
const app = express();

const port = process.env.PORT || 8080;

configViewEngine(app);
app.get("/", homeController);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
