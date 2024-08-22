import {
  StrategicAlliances,
  StrategicAlliancesBanner,
} from "../../models/strategic-alliances/index.mjs";

export const newStrategicAlliances = async (req, res) => {
  const { highlight, content } = req.body;
  const strategicAlliances = new StrategicAlliances({
    highlight,
    content,
  });
  try {
    const newStrategicAlliances = await strategicAlliances.save();
    res.status(201).json(newStrategicAlliances);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStrategicAlliances = async (req, res) => {
  const { id } = req.params;
  try {
    const strategicAlliances = await StrategicAlliances.findById(id);
    if (!strategicAlliances) {
      return res.status(404).json({ message: "resource not found" });
    }
    res.status(200).json({ strategicAlliances });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStrategicAlliances = async (req, res) => {
  const { id } = req.params;
  const { highlight, content } = req.body;
  try {
    const strategicAlliances = await StrategicAlliances.findByIdAndUpdate(id, {
      highlight,
      content,
    });
    res.status(200).json({ strategicAlliances });
  } catch (error) {
    res.status(500).json(error);
  }
};

// strategic alliances banner
export const addStrategicAlliancesBanner = async (req, res) => {
  const { bannerImgString } = req.body;
  const strategicAlliancesBanner = new StrategicAlliancesBanner({
    bannerImgString,
  });
  try {
    const newStrategicAlliancesBanner = await strategicAlliancesBanner.save();
    res.status(201).json(newStrategicAlliancesBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStrategicAlliancesBanner = async (req, res) => {
  const { id } = req.params;
  try {
    const strategicAlliancesBanner = await StrategicAlliancesBanner.findById(
      id
    );
    if (!strategicAlliancesBanner) {
      return res.status(404).json({ message: "resource not found" });
    }
    res.status(200).json({ strategicAlliancesBanner });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStrategicAlliancesBanner = async (req, res) => {
  const { id } = req.params;
  const { bannerImgString } = req.body;
  try {
    const strategicAlliancesBanner =
      await StrategicAlliancesBanner.findByIdAndUpdate(id, {
        bannerImgString,
      });
    res.status(200).json({ strategicAlliancesBanner });
  } catch (error) {
    res.status(500).json(error);
  }
};
