import User from "../../models/userModel.js";
import { validateChangePassword } from "../../validators/validator.js";

export const changePassword = async (req, res) => {
  const { currentpassword, newpassword, confirmnewpassword } = req.body;

  try {
    if (!currentpassword || !newpassword || !confirmnewpassword) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all required fields" });
    }

    const { error } = validateChangePassword.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    if (newpassword !== confirmnewpassword) {
      return res.status(400).json({
        success: false,
        message: "New password and confirmation do not match",
      });
    }

    if (newpassword === currentpassword) {
      return res.status(400).json({
        success: false,
        message: "New password must be different from current password",
      });
    }

    const user = await User.findById(req.user.id).select("+password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await user.comparePassword(currentpassword);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    user.password = newpassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};