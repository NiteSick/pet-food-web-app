const User = require("../model/User");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/jwt.utils");

const authHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    //check if user exists
    const foundUser = await User.findOne({ email });

    //if user does not exist
    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    //if user exists, check if password is valid
    const isPasswordValid = await bcrypt.compare(password, foundUser?.password);

    //if password is invalid
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //generate access and refresh tokens
    const accessToken = generateAccessToken({ email: foundUser.email });
    const refreshToken = generateRefreshToken({ email: foundUser.email });

    //if tokens are not generated
    if (!accessToken || !refreshToken) {
      return res.status(500).json({ message: "Failed to generate tokens" });
    }

    //saving refresh token with current user
    foundUser.refreshToken = refreshToken;
    await foundUser.save();

    // Creates Secure Cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: { email: foundUser.email },
      jwt: accessToken,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authHandler;
