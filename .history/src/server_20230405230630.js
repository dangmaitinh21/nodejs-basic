import express from "express";
import dotenv from "dotenv";
import configViewEngine from "./configs/viewEngine";
import configRoutes from "./routes/web";

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

configViewEngine(app);
configRoutes(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
