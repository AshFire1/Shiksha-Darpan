import express, { Router } from "express";
import { signIn, signUp } from "./mainAuth";

const authRouter: Router = Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", signIn);

export default authRouter;
