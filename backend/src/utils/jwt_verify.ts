import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
declare module "express-serve-static-core" {
    interface Request {
      user?: any; // or a specific type if you know the JWT payload structure
    }
  }
  

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

export default function jwt_verify(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Authorization header missing or malformed" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
}
