import User from "../models/userModel.js";

export const getLastLogin = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("lastLogin");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      lastLogin: user.lastLogin,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
