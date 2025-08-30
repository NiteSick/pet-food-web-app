const jwt = require("jsonwebtoken");
require("dotenv").config();

const accessTokenSecret = process.env.JWT_ACCESS_SECRET || "accessSecretkey";
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET || "refreshSecretkey";
const accessTokenExpiresIn = process.env.JWT_ACCESS_EXPIRES_IN || "1h";
const refreshTokenExpiresIn = process.env.JWT_REFRESH_EXPIRES_IN || "1d";

const generateAccessToken = (payload) => {
  return jwt.sign(payload, accessTokenSecret, {
    expiresIn: accessTokenExpiresIn,
  });
};
const generateRefreshToken = (payload) => {
  return jwt.sign(payload, refreshTokenSecret, {
    expiresIn: refreshTokenExpiresIn,
  });
};

const verifyAccessToken = (token) => {
  try {
    const decoded = jwt.verify(token, accessTokenSecret);
    return { valid: true, decoded, error: null };
  } catch (error) {
    console.error("Access token verification failed:", error.message);
    return { valid: false, decoded: null, error: null };
  }
};
const verifyRefreshToken = (token) => {
  try {
    const decoded = jwt.verify(token, refreshTokenSecret);
    return { valid: true, decoded, error: null };
  } catch (error) {
    console.error("Access token verification failed:", error.message);
    return { valid: false, decoded: null, error: null };
  }
};
module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
