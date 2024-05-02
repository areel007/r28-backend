import { User } from "../../models/user/index.mjs";

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      username,
      password,
    });

    await user.save();

    res.status(201).json({ msg: "successful" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    if (user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.status(200).json({ msg: "successful" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
