import { Approach } from "../../models/approach/index.mjs";

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
