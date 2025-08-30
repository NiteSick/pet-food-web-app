const User = require("../model/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const registerHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    await User.create({ email, password: hashPassword });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = registerHandler;
