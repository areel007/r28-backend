import mongoose from "mongoose";

const whoWeAreBanner = new mongoose.Schema({
  bannerImgString: {
    type: String,
  },
});

const whoWeareSchema = new mongoose.Schema({
  highlight: {
    type: String,
  },
  content: {
    type: String,
  },
});

const coreValuesBanner = new mongoose.Schema({
  bannerImgString: {
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

export const WhoWeAreBanner = mongoose.model("WhoWeAreBanner", whoWeAreBanner);

export const CoreValuesBanner = mongoose.model(
  "CoreValuesBanner",
  coreValuesBanner
);
