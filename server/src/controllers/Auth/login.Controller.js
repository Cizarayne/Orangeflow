import User from "../../models/userModel.js";
import sendTokenResponse from "../../utils/generateTokenAndCookie.js";
import { validateLogin } from "../../validators/validator.js";

export const login = async (req, res) => {
  const { username, email, phone, password } = req.body;

  try {
    if (!password || (!username && !email && !phone)) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all required fields" });
    }

    const { error } = validateLogin.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const orConditions = [];
    if (email) orConditions.push({ email });
    if (username) orConditions.push({ username });
    if (phone) orConditions.push({ phone });

    const exist = await User.findOne({ $or: orConditions });

    if (!exist) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials, please try again",
      });
    }

    const isMatch = await exist.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials, please try again",
      });
    }

    
    const userAgent = req.headers["user-agent"] || null;

    exist.lastLogin = new Date();
    exist.loginHistory = exist.loginHistory || [];
    exist.loginHistory.unshift({
      timestamp: new Date(),
      userAgent,
    });
    exist.loginHistory = exist.loginHistory.slice(0, 10); 
    await exist.save();

    
    const token = await sendTokenResponse(exist._id, exist.email, res);

    const response = await User.findById(exist._id).select(
      "-password -__v -createdAt -updatedAt -passwordResetToken -passwordResetExpire",
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: response,
      token,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};