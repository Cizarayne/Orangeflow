import jwt from "jsonwebtoken";

const sendTokenResponse = (userId, email, res) => {
  const token = jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });

  if (res && typeof res.cookie === "function") {
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:"none",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
  }
  return token;
};

export default sendTokenResponse;
