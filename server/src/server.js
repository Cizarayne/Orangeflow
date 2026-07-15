import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import route from "./routes/routes.js";
import connectDatabase from "./configs/database.js";

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }

    const normalizedOrigin = origin.replace(/\/+$/, "");
    const normalizedAllowedOrigins = allowedOrigins.map((allowedOrigin) =>
      allowedOrigin.replace(/\/+$/, ""),
    );

    if (normalizedAllowedOrigins.includes(normalizedOrigin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

let isConnected = false;

app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await connectDatabase();
      isConnected = true;
    } catch (error) {
      console.error("Database connection failed:", error.message);
      return res
        .status(500)
        .json({ success: false, message: "Database connection failed" });
    }
  }
  next();
});

app.use("/api", route);

if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 8000;

  try {
    await connectDatabase();
    isConnected = true;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

export default app;
