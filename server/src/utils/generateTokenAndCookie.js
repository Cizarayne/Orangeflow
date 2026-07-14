import jwt from "jsonwebtoken";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  path: "/",
  maxAge: 1000 * 60 * 60 * 24 * 7,
};

const sendTokenResponse = (userId, email, res) => {
  const token = jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });

  if (res && typeof res.cookie === "function") {
    res.cookie("token", token, cookieOptions);
  }

  return token;
};

export default sendTokenResponse;
