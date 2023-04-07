import express from "express";
import dotenv from "dotenv";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
