import { Approach, ApproachBanner } from "../../models/approach/index.mjs";

export const newApproach = async (req, res) => {
  const { highlight, content } = req.body;
  const approach = new Approach({
    highlight,
    content,
  });
  try {
    const newApproach = await approach.save();
    res.status(201).json(newApproach);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getApproach = async (req, res) => {
  const { id } = req.params;
  try {
    const approach = await Approach.findById(id);
    if (!approach) {
      return res.status(404).json({ message: "resource not found" });
    }
    res.status(200).json({ approach });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateApproach = async (req, res) => {
  const { id } = req.params;
  const { highlight, content } = req.body;
  try {
    const approach = await Approach.findByIdAndUpdate(id, {
      highlight,
      content,
    });
    res.status(200).json({ approach });
  } catch (error) {
    res.status(500).json(error);
  }
};

// approach banner image
export const addApproachBanner = async (req, res) => {
  const { bannerImgString } = req.body;
  const approachBanner = new ApproachBanner({
    bannerImgString,
  });
  try {
    const newApproachBanner = await approachBanner.save();
    res.status(201).json(newApproachBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getApproachBanner = async (req, res) => {
  const { id } = req.params;
  try {
    const approachBanner = await ApproachBanner.findById(id);
    if (!approachBanner) {
      return res.status(404).json({ message: "resource not found" });
    }
    res.status(200).json({ approachBanner });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateApproachBanner = async (req, res) => {
  const { id } = req.params;
  const { bannerImgString } = req.body;
  try {
    const approachBanner = await ApproachBanner.findByIdAndUpdate(id, {
      bannerImgString,
    });
    res.status(200).json({ approachBanner });
  } catch (error) {
    res.status(500).json(error);
  }
};
