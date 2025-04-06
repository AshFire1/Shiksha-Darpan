"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainAuth_1 = require("./mainAuth");
const authRouter = (0, express_1.Router)();
authRouter.post("/signup", mainAuth_1.signUp);
authRouter.post("/login", mainAuth_1.signIn);
exports.default = authRouter;
