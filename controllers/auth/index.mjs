import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../models/user/index.mjs";

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      password: hashedPassword,
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

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.status(200).json({ msg: "successful" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
