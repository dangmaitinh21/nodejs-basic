import express from "express";
import dotenv from "dotenv";
import configViewEngine from "./configs/viewEngine";
import { getHomePage } from "./controller/homeController";

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

configViewEngine(app);
app.get("/", homeController);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
