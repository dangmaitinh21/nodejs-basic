import express from "express";
import dotenv from "dotenv";
import configViewEngine from "./configs/viewEngine";
import configRouter from "./routes/web";

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

configViewEngine(app);
configRouter(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
