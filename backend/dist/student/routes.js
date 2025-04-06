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
const express_1 = require("express");
const jwt_verify_1 = __importDefault(require("../utils/jwt_verify"));
const zodschemas_1 = require("../utils/zodschemas");
const studentRouter = (0, express_1.Router)();
studentRouter.route("/getstudent")
    .get(jwt_verify_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (!userId) {
            res.status(400).json({ error: "User ID missing from token" });
            return;
        }
        const student = yield zodschemas_1.Student.findFirst({
            where: {
                id: userId, // Assuming 'userId' is a field in your Student table
            },
        });
        if (!student) {
            res.status(404).json({ error: "Student not found" });
            return;
        }
        res.json({ student });
    }
    catch (err) {
        console.error("Error fetching student:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = studentRouter;
