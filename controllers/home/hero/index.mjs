import { HeroText } from "../../../models/home/index.mjs";

export const addHeroText = async (req, res) => {
  const { text } = req.body;
  const heroText = new HeroText({
    text,
  });
  try {
    const newHeroText = await heroText.save();
    res.status(201).json(newHeroText);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getHeroText = async (req, res) => {
  const { id } = req.params;
  try {
    const heroText = await HeroText.findById(id);
    res.status(200).json({ heroText });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateHeroText = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const heroText = await HeroText.findByIdAndUpdate(id, {
      text,
    });
    res.status(200).json({ heroText });
  } catch (error) {
    res.status(500).json(error);
  }
};
