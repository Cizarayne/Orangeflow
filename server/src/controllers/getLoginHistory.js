import User from "../models/userModel.js";
import { parseUserAgent } from "../utils/parseUserAgent.js";

export const getLoginHistory = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("loginHistory");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const history = user.loginHistory.map((entry) => {
      const { browser, os } = parseUserAgent(entry.userAgent);
      return {
        timestamp: entry.timestamp,
        browser,
        os,
      };
    });

    return res.status(200).json({ success: true, loginHistory: history });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};