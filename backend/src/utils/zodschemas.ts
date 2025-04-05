import { z } from "zod"

const signUpSchema = z.object({
    email: z
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

const signInSchema = z.object({
    email: z
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