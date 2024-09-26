import { Schema, model } from "mongoose";

const investmentSchema = new Schema({
  title: {
    type: String,
    required: [true, "This field is required"],
  },
  tabText: {
    type: String,
  },
  highlight: {
    type: String,
  },
  sector: {
    type: String,
    required: [true, "This field is required"],
  },
  heroImage: {
    type: String,
    default: "",
  },
  heroText: {
    type: String,
  },
  bannerImage: {
    type: String,
    default: "",
  },
  content: {
    type: String,
  },
  website: {
    type: String,
  },
  logo: {
    type: String,
  },
});

export const Investment = model("Investment", investmentSchema);
