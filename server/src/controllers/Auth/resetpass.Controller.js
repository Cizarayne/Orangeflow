import crypto from "crypto";
import User from "../../models/userModel.js";

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newpassword, confirmnewpassword } = req.body;

  try {
    if (!newpassword || !confirmnewpassword) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all required fields" });
    }

    if (newpassword !== confirmnewpassword) {
      return res.status(400).json({
        success: false,
        message: "New password and confirmation do not match",
      });
    }

    // Hash the incoming token to compare against what's stored in DB
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired reset token",
      });
    }

    user.password = newpassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpire = undefined;
    await user.save(); // triggers hashing hook

    res.clearCookie("token"); // log out any existing session

    return res.status(200).json({
      success: true,
      message: "Password reset successful, please login with your new password",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};