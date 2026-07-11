import crypto from "crypto";
import User from "../../models/userModel.js";
import sendEmail from "../../utils/sendEmail.js";

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide an email" });
    }

    const user = await User.findOne({ email });

    // Always return a generic success message, even if user doesn't exist,
    // to avoid leaking which emails are registered
    if (!user) {
      return res.status(200).json({
        success: true,
        message: "If an account with that email exists, a reset link has been sent",
      });
    }

    // Generate raw token (sent to user) and hashed token (stored in DB)
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.passwordResetToken = hashedToken;
    user.passwordResetExpire = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: `You requested a password reset. Click the link to reset your password: ${resetUrl}\n\nThis link expires in 15 minutes. If you didn't request this, please ignore this email.`,
      });

      return res.status(200).json({
        success: true,
        message: "If an account with that email exists, a reset link has been sent",
      });
    } catch (emailError) {
      // Roll back the token if email fails to send
      user.passwordResetToken = undefined;
      user.passwordResetExpire = undefined;
      await user.save({ validateBeforeSave: false });

      console.log(emailError.message);
      return res.status(500).json({
        success: false,
        message: "Email could not be sent, please try again later",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};