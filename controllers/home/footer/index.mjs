import { Footer } from "../../../models/home/index.mjs";

export const addFooter = async (req, res) => {
  const { about, telephones, email, address } = req.body;

  const footer = new Footer({
    about,
    telephones,
    email,
    address,
  });
  try {
    const newFooter = await footer.save();
    res.status(201).json(newFooter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getFooter = async (req, res) => {
  const { id } = req.params;

  try {
    const footer = await Footer.findById(id);
    res.status(200).json({ footer });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateFooter = async (req, res) => {
  const { id } = req.params;
  const { about, telephones, email, address } = req.body;
  try {
    const footer = await Footer.findByIdAndUpdate(id, {
      about,
      telephones,
      email,
      address,
    });
    res.status(200).json({ footer });
  } catch (error) {
    res.status(500).json(error);
  }
};
