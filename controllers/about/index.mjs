import { WhoWeAre, CoreValues } from "../../models/about/index.mjs";

export const newWhoWeAre = async (req, res) => {
  const { highlight, content } = req.body;
  const whoWeAre = new WhoWeAre({
    highlight,
    content,
  });
  try {
    const newWhoWeAre = await whoWeAre.save();
    res.status(201).json(newWhoWeAre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getWhoWeAre = async (req, res) => {
  const { id } = req.params;
  try {
    const whoWeAre = await WhoWeAre.findById(id);
    res.status(200).json({ whoWeAre });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateWhoWeAre = async (req, res) => {
  const { id } = req.params;
  const { highlight, content } = req.body;
  try {
    const whoWeAre = await WhoWeAre.findByIdAndUpdate(id, {
      highlight,
      content,
    });
    res.status(200).json({ whoWeAre });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const newCoreValues = async (req, res) => {
  const { integrity, excellence, innovation } = req.body;
  const coreValues = new CoreValues({
    integrity,
    excellence,
    innovation,
  });
  try {
    const newCoreValues = await coreValues.save();
    res.status(201).json(newCoreValues);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCoreValues = async (req, res) => {
  const { id } = req.params;
  try {
    const coreValues = await CoreValues.findById(id);
    res.status(200).json({ coreValues });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCoreValues = async (req, res) => {
  const { id } = req.params;
  const { integrity, excellence, innovation } = req.body;
  try {
    const coreValues = await CoreValues.findByIdAndUpdate(id, {
      integrity,
      excellence,
      innovation,
    });
    res.status(200).json({ coreValues });
  } catch (error) {
    res.status(500).json(error);
  }
};
