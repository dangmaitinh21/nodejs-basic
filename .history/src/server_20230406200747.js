import express from "express";
import dotenv from "dotenv";
import configViewEngine from "./configs/viewEngine";
import configRouter from "./routes/web";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

configViewEngine(app);
configRouter(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
