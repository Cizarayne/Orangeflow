import User from "../../models/userModel.js";

export const updatedUser = async (req, res) => {
  const { fullname, username, email, phone, gender } = req.body;

  try {
    const updates = {};
    if (fullname !== undefined) updates.fullname = fullname;
    if (username !== undefined) updates.username = username;
    if (email !== undefined) updates.email = email;
    if (phone !== undefined) updates.phone = phone;
    if (gender !== undefined) updates.gender = gender;

    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User account not found" });
    }

    const response = await User.findById(req.user.id).select(
      "-password -__v -createdAt -updatedAt -passwordResetToken -passwordResetExpire",
    );

    return res.status(200).json({
      success: true,
      message: "User account information updated successfully",
      data: response,
    });
  } catch (error) {
    console.log(error.message);

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern || {})[0] || "field";
      return res.status(409).json({
        success: false,
        message: `${field} already in use`,
      });
    }
    return res.status(500).json({ success: false, message: error.message });
  }
};