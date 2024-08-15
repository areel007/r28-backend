import mongoose from "mongoose";

const whoWeareSchema = new mongoose.Schema({
  highlight: {
    type: String,
  },
  content: {
    type: String,
  },
});

const coreValues = new mongoose.Schema({
  integrity: {
    type: String,
  },
  excellence: {
    type: String,
  },
  innovation: {
    type: String,
  },
});

export const WhoWeAre = mongoose.model("WhoWeAre", whoWeareSchema);

export const CoreValues = mongoose.model("CoreValues", coreValues);
