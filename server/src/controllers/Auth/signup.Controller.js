import User from "../../models/userModel.js";
import sendTokenResponse from "../../utils/generateTokenAndCookie.js";
import { validateSignup } from "../../validators/validator.js";

export const signup = async (req, res) => {
  const { fullname, username, email, phone, gender, password } = req.body;

  try {
    if (!fullname || !username || !email || !phone || !gender || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all required fields" });
    }
    const { error } = validateSignup.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

 const exist = await User.findOne({
  $or: [{ email }, { username }, { phone }],
});

if (exist) {
  const field =
    exist.email === email
      ? "email"
      : exist.username === username
        ? "username"
        : "phone";

  return res.status(400).json({
    success: false,
    message: `This ${field} already exists, please login instead`,
  });
}
    const user = await User.create({
      fullname,
      username,
      email,
      phone,
      gender,
      password,
    });

    const token = await sendTokenResponse(user._id, user.email, res);

    const response = await User.findById(user._id).select(
      "-password -__v -createdAt -updatedAt -passwordResetToken -passwordResetExpire",
    );

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      data: response,
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error.message);
  }
};
