import mongoose from "mongoose";
import { app } from "./app.mjs";

const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

async function connectToDatabase() {
  try {
    await mongoose.connect(DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

connectToDatabase();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App running on port ${port}`));
