const User = require("../model/User");

const logout = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
      return res.status(401).json({ error: "jwt cookie not found" });
    }
    console.log("cookies", cookies);
    const refreshToken = cookies.jwt;
    console.log("refreshToken", refreshToken);

    const foundUser = await User.findOne({ refreshToken });

    if (!foundUser) {
      return res.status(401).json({ error: "User not found" });
    }

    foundUser.refreshToken = "";
    await foundUser.save();

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

    res.status(204);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = logout;
