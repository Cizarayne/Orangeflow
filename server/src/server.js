import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import route from "./routes/routes.js";
import connectDatabase from "./configs/database.js";

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api", route);


let isConnected = false;

app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await connectDatabase();
      isConnected = true;
    } catch (error) {
      console.error("Database connection failed:", error.message);
      return res.status(500).json({ success: false, message: "Database connection failed" });
    }
  }
  next();
});

if (process.env.VERCEL !== "1") {
  const PORT = process.env.PORT || 8000;
  connectDatabase()
    .then(() => {
      isConnected = true;
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Failed to start server:", error.message);
      process.exit(1);
    });
}

export default app;