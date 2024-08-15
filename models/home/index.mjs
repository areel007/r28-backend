import { Schema, model } from "mongoose";

// hero video
const heroVideoSchema = new Schema({
  videoUrl: {
    type: String,
  },
});

export const HeroVideo = model("HeroVideo", heroVideoSchema);

// hero text
const heroTextSchema = new Schema({
  text: {
    type: String,
  },
});

export const HeroText = model("HeroText", heroTextSchema);

// overview
const overviewSchema = new Schema({
  highlight: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const Overview = model("Overview", overviewSchema);

// stats
const statsSchema = new Schema({
  sectors: {
    type: String,
  },
  portfolios: {
    type: String,
  },
  employees: {
    type: String,
  },
  operations: {
    type: String,
  },
});

export const Stat = model("Stat", statsSchema);

// what we do
const whatWeDoSchema = new Schema({
  highlight: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const WhatWeDo = model("WhatWeDo", whatWeDoSchema);

// footer
const footerSchema = new Schema({
  about: {
    type: String,
  },
  telephones: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
});

export const Footer = model("Footer", footerSchema);
