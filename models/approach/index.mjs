import mongoose from "mongoose";

const approachSchema = new mongoose.Schema({
  highlight: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const Approach = mongoose.model("Approach", approachSchema);
