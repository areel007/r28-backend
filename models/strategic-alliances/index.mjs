import mongoose from "mongoose";

const strategicAlliancesSchema = new mongoose.Schema({
  highlight: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const StrategicAlliances = mongoose.model(
  "StrategicAlliances",
  strategicAlliancesSchema
);
