import express, { Router, Request, Response } from "express";
import jwt_verify from "../utils/jwt_verify";
import { Student } from "../utils/zodschemas";

const studentRouter = Router();


studentRouter.route("/getstudent")
  .get(jwt_verify, async (req: Request, res: Response):Promise<void> => {
    try {
      const userId = (req as any).user?.id;

      if (!userId) {
        res.status(400).json({ error: "User ID missing from token" });
        return ;
      }

      const student = await Student.findFirst({
        where: {
          id: userId, // Assuming 'userId' is a field in your Student table
        },
      });

      if (!student) {
         res.status(404).json({ error: "Student not found" });
         return ;
      }

      res.json({ student });
    } catch (err) {
      console.error("Error fetching student:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

export default studentRouter;
