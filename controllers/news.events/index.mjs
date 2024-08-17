import NewsAndEvents from "../../models/news.events/index.mjs";

// Add news and events
export const addNewsAndEvents = async (req, res) => {
  try {
    const { title, subtitle, content, newsImgUrl } = req.body;

    const news = new NewsAndEvents({
      title,
      subtitle,
      content,
      newsImgUrl,
    });

    await news.save();
    res.status(201).json({ message: "News and events successfully added" });
  } catch (error) {
    console.error("Error adding news and events:", error);
    res.status(500).json({ message: "Error adding news and events" });
  }
};

export const getAllNewsAndEvents = async (req, res) => {
  try {
    const newsAndEvents = await NewsAndEvents.find();

    res.status(200).json({ newsAndEvents });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getNewsAndEvents = async (req, res) => {
  const { id } = req.params;
  try {
    const newsAndEvents = await NewsAndEvents.findById(id);

    if (!newsAndEvents) {
      return res.status(404).json({ message: "resource not found" });
    }

    res.status(200).json({ newsAndEvents });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteNewsAndEvents = async (req, res) => {
  const { id } = req.params;

  try {
    await NewsAndEvents.findByIdAndDelete(id);
    res.status(200).json({ msg: "news and events deleted successfully." });
  } catch (error) {
    res.status(500).json(error);
  }
};
