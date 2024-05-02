import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.mjs";

export const app = express();

app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use(routes);
