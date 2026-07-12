import jwt from "jsonwebtoken";

const sendTokenResponse = (userId, email, res) => {
  const token = jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });

  if (res && typeof res.cookie === "function") {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });
  }
  return token;
};

export default sendTokenResponse;
