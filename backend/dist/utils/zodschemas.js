"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInSchema = exports.signUpSchema = exports.Student = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
exports.Student = prismaClient.student;
exports.signUpSchema = zod_1.z.object({
    username: zod_1.z
        .string()
        .email()
        .min(5)
        .max(255),
    password: zod_1.z
        .string()
        .min(5)
        .max(50)
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
    name: zod_1.z
        .string()
        .min(5)
        .max(255),
});
exports.signInSchema = zod_1.z.object({
    username: zod_1.z
        .string()
        .email()
        .min(5)
        .max(255),
    password: zod_1.z
        .string()
        .min(5)
        .max(50)
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
});
