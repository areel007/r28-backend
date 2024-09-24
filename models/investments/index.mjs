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
    required: [true, "This field is required"],
  },
  sector: {
    type: String,
    required: [true, "This field is required"],
  },
  heroImage: {
    type: String,
  },
  heroText: {
    type: String,
  },
  bannerImage: {
    type: String,
  },
  content: {
    type: String,
    required: [true, "This field is required"],
  },
  website: {
    type: String,
  },
  logo: {
    type: String,
  },
});

export const Investment = model("Investment", investmentSchema);
