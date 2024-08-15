import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.mjs";
import dotenv from "dotenv";

export const app = express();
dotenv.config({ path: "./config.env" });

app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use(routes);

// DATABASE=mongodb+srv://delz:uN7Wo6kF2MYtLncl@cluster0.zacl9s2.mongodb.net/r28_db
