import { Stat } from "../../../models/home/index.mjs";

export const addStats = async (req, res) => {
  const { sectors, portfolios, employees, operations } = req.body;
  const stats = new Stat({
    sectors,
    portfolios,
    employees,
    operations,
  });
  try {
    const newStats = await stats.save();
    res.status(201).json(newStats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStats = async (req, res) => {
  const { id } = req.params;
  try {
    const stats = await Stat.findById(id);
    res.status(200).json({ stats });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStats = async (req, res) => {
  const { id } = req.params;
  const { sectors, portfolios, employees, operations } = req.body;
  try {
    const stats = await Stat.findByIdAndUpdate(id, {
      sectors,
      portfolios,
      employees,
      operations,
    });
    res.status(200).json({ stats });
  } catch (error) {
    res.status(500).json(error);
  }
};
