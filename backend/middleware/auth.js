const jwt = require("jsonwebtoken");
const JWT_SECRET = 'ndskfenficcbiefkxcnd'


const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 1. Check token existence
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Token missing",
      });
    }

    // 2. Extract token
    const token = authHeader.split(" ")[1];

    // 3. Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // 4. Attach user info to request
    req.user = decoded; // { id, email }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = verifyToken;
