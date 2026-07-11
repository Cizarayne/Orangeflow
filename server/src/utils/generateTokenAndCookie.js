import jwt from "jsonwebtoken";

const sendTokenResponse = (userId, email, res) => {
  // 1. Generate the token
  const token = jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });

  // 2. Set the cookie
  if (res && typeof res.cookie === "function") {
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    });
  }

  // 3. Return the token
  return token;
};

export default sendTokenResponse;
