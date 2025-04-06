"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zodschemas_1 = require("../utils/zodschemas");
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, name } = req.body;
    try {
        const existingUser = yield zodschemas_1.Student.findFirst({ where: { username } });
        if (existingUser) {
            res.status(400).json({ message: "Username already taken" });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newStudent = yield zodschemas_1.Student.create({
            data: {
                username,
                name,
                password: hashedPassword,
            },
        });
        res.status(201).json({
            message: "User created successfully",
            student: { id: newStudent.id, username: newStudent.username, name: newStudent.name },
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const student = yield zodschemas_1.Student.findFirst({
            where: {
                username: username,
            },
        });
        if (!student) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const passwordMatch = yield bcrypt_1.default.compare(password, student.password);
        if (!passwordMatch) {
            res.status(401).json({ message: "Invalid password" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: student.id, username: student.username }, process.env.JWT_SECRET, { expiresIn: "365d" });
        res.status(200).json({
            message: "Login successful",
            token,
            student: { id: student.id, username: student.username },
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.signIn = signIn;
