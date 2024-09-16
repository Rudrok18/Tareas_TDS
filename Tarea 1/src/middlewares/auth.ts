import { Request, Response, NextFunction } from "express";
import { User } from "../types/user";

const secretKey = '12345';

declare global {
    namespace Express {
        interface Request {
            user?: User
        }
    }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // const token = req.headers.authorization;
    const key = req.query.key;
    if (key === secretKey) {
        const user: User = {
            id: '1',
            name: 'John Doe',
            role: "admin"
        };
        req.user = user;
        return next();
    }
    /*if (key === secretKey) {
        const user: User = {
            id: '2',
            name: 'Rodrigo',
            role: "user"
        };
        req.user = user;
        return next();
    }*/
    res.sendStatus(401);
}