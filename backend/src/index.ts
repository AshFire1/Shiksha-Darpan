
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import { Request,Response } from "express";
import authRouter from "./auth/routes";
import studentRouter from "./student/routes";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: ["http://localhost:5173", "https://shiksha-darpan.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};


app.use(cors(corsOptions));
app.options("*", cors(corsOptions));


app.use(express.json());
app.use("/auth",authRouter);
app.use("/student",studentRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
