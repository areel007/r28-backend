import { WhatWeDo } from "../../../models/home/index.mjs";

export const addWhatWeDo = async (req, res) => {
  const { highlight, content } = req.body;

  try {
    const whatWeDo = new WhatWeDo({
      highlight,
      content,
    });
    const newWhatWeDo = await whatWeDo.save();
    res.status(201).json({
      newWhatWeDo,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getWhatWeDo = async (req, res) => {
  const { id } = req.params;

  try {
    const whatWeDo = await WhatWeDo.findById(id);
    res.status(200).json({ whatWeDo });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateWhatWeDo = async (req, res) => {
  const { id } = req.params;
  const { highlight, content } = req.body;
  try {
    const whatWeDo = await WhatWeDo.findByIdAndUpdate(id, {
      highlight,
      content,
    });
    res.status(200).json({ whatWeDo });
  } catch (error) {
    res.status(500).json(error);
  }
};
