import { Investment } from "../../models/investments/index.mjs";

export const addInvestment = async (req, res) => {
  const {
    title,
    highlight,
    heroImage,
    bannerImage,
    content,
    website,
    logo,
    sector,
    heroText,
    tabText,
  } = req.body;
  try {
    const investment = new Investment({
      title,
      highlight,
      heroImage,
      bannerImage,
      content,
      website,
      logo,
      sector,
      heroText,
      tabText,
    });

    await investment.save();
    res.status(201).json({ message: "Investment successfully added" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getInvestment = async (req, res) => {
  const { id } = req.params;
  try {
    const investment = await Investment.findById(id);
    res.status(200).json(investment);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find();
    res.status(200).json(investments);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteInvestment = async (req, res) => {
  const { id } = req.params;
  try {
    await Investment.findByIdAndDelete(id);
    res.status(200).json({ message: "Investment successfully deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateInvestment = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    highlight,
    heroImage,
    bannerImage,
    content,
    website,
    logo,
    sector,
    heroText,
    tabText,
  } = req.body;
  try {
    await Investment.findByIdAndUpdate(id, {
      title,
      highlight,
      heroImage,
      bannerImage,
      content,
      website,
      logo,
      sector,
      heroText,
      tabText,
    });
    res.status(200).json({ message: "Investment successfully updated" });
  } catch (error) {
    res.status(500).json(error);
  }
};
