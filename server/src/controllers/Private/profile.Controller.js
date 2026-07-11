import User from "../../models/userModel.js";

export const profile = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select(
      "-password -__v -updatedAt -passwordResetToken -passwordResetExpire",
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "This user does not exist" });
    }

    const response = await {
      ...user._doc,
      createdAt: user.createdAt.toLocaleString(),
    };
    return res.status(200).json({
      success: true,
      message: "This user's profile has been retrieved successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error retrieving user profile:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
