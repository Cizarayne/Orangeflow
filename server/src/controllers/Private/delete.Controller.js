import User from "../../models/userModel.js";

export const deletedUser = async (req, res) => {
  const { password } = req.body;

  try {
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Please provide your password to confirm account deletion",
      });
    }

    
    const exist = await User.findById(req.user.id).select("+password");
    if (!exist) {
      return res.status(404).json({
        success: false,
        message: "User account not found",
      });
    }

    const isMatch = await exist.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password, account not deleted",
      });
    }

    await User.findByIdAndDelete(req.user.id);

    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "User account deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};