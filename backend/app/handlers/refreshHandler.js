const {
  verifyRefreshToken,
  generateAccessToken,
} = require("../utils/jwt.utils");
const User = require("../model/User");

const handleRefresh = async (req, res) => {
  try {
    const cookies = req.cookies;

    //check if jwt cookie is present
    if (!cookies?.jwt) {
      return res.status(401).json({ error: "jwt cookie not found" });
    }

    const refreshToken = cookies.jwt;

    //find user with refresh token
    const foundUser = await User.findOne({ refreshToken });

    if (!foundUser) {
      return res.sendStatus(403); //Forbidden
    }

    //verify refresh token

    const { valid, decoded } = verifyRefreshToken(refreshToken);
    if (!valid) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }

    if (decoded.email !== foundUser.email) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }

    const accessToken = generateAccessToken(decoded);
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = handleRefresh;
