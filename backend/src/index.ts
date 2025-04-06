import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import { Request, Response } from "express";
import authRouter from "./auth/routes";
import studentRouter from "./student/routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Correct CORS config
const corsOptions = {
  origin: ["http://localhost:5173", "https://shiksha-darpan.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
};

// ✅ Apply CORS
app.use(cors(corsOptions));

// ✅ Allow preflight
app.options("*", cors(corsOptions));

// JSON body parser
app.use(express.json());

// Routes
app.use("/auth", authRouter);
app.use("/student", studentRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
