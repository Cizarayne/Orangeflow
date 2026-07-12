import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, text, html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_PORT == 465, // true for port 465, false for 587/others
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Orangeflow Support" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    ...(html && { html }), // only include html if provided
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;