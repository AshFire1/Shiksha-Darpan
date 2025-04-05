import { Request, Response } from "express";



export const signUp = async(req: Request, res: Response): Promise<void>=>{

}

export const signIn = async(req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    
}