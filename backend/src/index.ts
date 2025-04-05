
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import { Request,Response } from "express";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
