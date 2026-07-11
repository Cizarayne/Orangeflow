import mongoose from "mongoose";
import User from "../../models/userModel.js";

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid user ID" });
    }

    const user = await User.findById(id).select(
      "fullname username gender",
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "This user account does not exist" });
    }

    return res.status(200).json({
      success: true,
      message: "This user has been retrieved successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error retrieving user:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};