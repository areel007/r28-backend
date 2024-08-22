import mongoose from "mongoose";

const approachBanner = new mongoose.Schema({
  bannerImgString: {
    type: String,
  },
});

const approachSchema = new mongoose.Schema({
  highlight: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const Approach = mongoose.model("Approach", approachSchema);

export const ApproachBanner = mongoose.model("ApproachBanner", approachBanner);
