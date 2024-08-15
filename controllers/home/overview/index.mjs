import { Overview } from "../../../models/home/index.mjs";

export const addOverview = async (req, res) => {
  const { highlight, content } = req.body;
  const overview = new Overview({
    highlight,
    content,
  });
  try {
    const newOverview = await overview.save();
    res.status(201).json(newOverview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOverview = async (req, res) => {
  const { id } = req.params;
  try {
    const overview = await Overview.findById(id);
    res.status(200).json({ overview });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOverview = async (req, res) => {
  const { id } = req.params;
  const { highlight, content } = req.body;
  try {
    const overview = await Overview.findByIdAndUpdate(id, {
      highlight,
      content,
    });
    res.status(200).json({ overview });
  } catch (error) {
    res.status(500).json(error);
  }
};
