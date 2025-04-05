import { z } from "zod"
import { PrismaClient } from "@prisma/client";

const prismaClient=new PrismaClient();
export const Student= prismaClient.student;
export const signUpSchema = z.object({
    username: z
    .string()
    .email()
    .min(5)
    .max(255),
    password: z
    .string()
    .min(5)
    .max(50)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
    name: z
    .string()
    .min(5)
    .max(255),
    
})

export const signInSchema = z.object({
    username: z
    .string()
    .email()
    .min(5)
    .max(255),
    password: z
    .string()
    .min(5)
    .max(50)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
})