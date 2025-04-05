import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Student } from "../utils/zodschemas";
import bcrypt from "bcrypt";

export const signUp = async (req: Request, res: Response): Promise<void> => {
    const { username, password, name } = req.body;
  
    try {
      const existingUser = await Student.findFirst({ where: { username } });
  
      if (existingUser) {
        res.status(400).json({ message: "Username already taken" });
        return;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newStudent = await Student.create({
        data: {
          username,
          name,
          password: hashedPassword,
        },
      });
  
      const token = jwt.sign(
        { id: newStudent.id, username: newStudent.username },
        process.env.JWT_SECRET as string,
        { expiresIn: "365d" }
      );
  
      res.status(201).json({
        message: "User created successfully",
        token,
        student: { id: newStudent.id, username: newStudent.username, name: newStudent.name },
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };

export const signIn = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
  
    try {
      const student = await Student.findFirst({
        where: {
          username: username,
        },
      });
  
      if (!student) {
        res.status(404).json({ message: "User not found" });
        return;
      }
  
      const passwordMatch = await bcrypt.compare(password, student.password);
  
      if (!passwordMatch) {
        res.status(401).json({ message: "Invalid password" });
        return;
      }
  
      const token = jwt.sign(
        { id: student.id, username: student.username },
        process.env.JWT_SECRET as string,
        { expiresIn: "365d" }
      );
  
      res.status(200).json({
        message: "Login successful",
        token,
        student: { id: student.id, username: student.username },
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };