import { StrategicAlliances } from "../../models/strategic-alliances/index.mjs";

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
