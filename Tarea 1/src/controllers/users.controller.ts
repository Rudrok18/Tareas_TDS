import { Request, Response } from "express";
import { User } from "../types/user";

const users: User[] = [
    { id: '1', name: 'John Doe', role: 'admin'},
    { id: '2', name: 'Rodrigo Lopez', role: 'user'}
];

const findAll = (req: Request, res: Response) => {
    return res.json(users);
};

const createUser = (req: Request, res: Response) => {
    const {id, name, role} = req.body;

    if (!id || !name || !role) {
        return res.status(400).json({ message: 'Mising data'});
    }

    const newUser: User = { id, name, role};
    users.push(newUser);

    res.status(201).json(newUser)
}

export default { findAll, createUser};