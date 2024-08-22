import mongoose from "mongoose";

const strategicAlliancesBanner = new mongoose.Schema({
  bannerImgString: {
    type: String,
  },
});

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

export const StrategicAlliancesBanner = mongoose.model(
  "StrategicAlliancesBanner",
  strategicAlliancesBanner
);
