import { Request, Response } from "express";
import User, { IUser } from "../models/user.model";

export const getUsers = async (_req: Request, res: Response) => {
    const users = await User.find();
    return res.status(200).json({
        users: users.map((user: IUser) => ({
            id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            role: user.role
        }))
    })
};

export const createUser = async (req: Request, res: Response) => {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
};
