import jwt from "jsonwebtoken";

export const protectMiddleware = async (req, res, next) => {
    const secret = process.env.JWT_SECRET;
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first to execute this action",
      });
    }
    const decoded = jwt.verify(token, secret);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized, invalid token or expired",
      });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error.message);
    throw new Error(error.message);
  }
};
