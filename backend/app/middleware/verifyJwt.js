const { verifyAccessToken } = require("../utils/jwt.utils");

const verifyJwt = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    // Check if header starts with "Bearer "
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Invalid authorization format. Use 'Bearer <token>'",
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    const { valid, decoded } = verifyAccessToken(token);
    if (!valid) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Attach decoded user info to request object for use in route handlers
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT verification middleware error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error during authentication" });
  }
};

module.exports = verifyJwt;
