import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import User from './../models/user';
import { HTTP_STATUS_CODES } from './../types/http-status-codes';

class UsersController {

    getAll(req: Request, res: Response) {
        User.find({}).then(response => {
            res.send(response);
        }).catch(error => {
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        });
    }

    async createUser(req: Request, res: Response) {
        try {
            const { firstName, lastName, email, password, role } = req.body;

            const userExists = await User.findOne({ email });
            if (userExists) {
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ message: "Email already registered" });
            }

            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                role,
                status: "active"
            });
    
            await newUser.save();
            return res.status(HTTP_STATUS_CODES.SUCCESS).json(newUser);
        } catch (error) {
            return res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ message: "User not found"});
            }

            if (user.status === 'deleted' || user.status === 'blocked') {
                return res.status(HTTP_STATUS_CODES.FORBIDDEN).json({ message: "User blocked or elminated"});
            }

            const passwordMatch = password === user.password;

            if (!passwordMatch) {
                return res.status(HTTP_STATUS_CODES.FORBIDDEN).json({ message: "Incorrect credentials"});
            }

            const token = jwt.sign(
                { id: user._id, email: user.email, role: user.role },
                process.env.JWT_SECRET || 'default_secret',
                { expiresIn: '1h' }
            );

            return res.status(HTTP_STATUS_CODES.SUCCESS).json({ message: "Login successful", user });
        } catch (error) {
            console.error(error);
            return res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        }
    }
}

const controller = new UsersController();
export default controller;
