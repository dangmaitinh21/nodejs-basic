import express from "express";
import dotenv from "dotenv";
import viewEngine from "./src/configs/viewEngine";

const app = express();
const port = process.env.PORT || 8080;

viewEngine(app);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
