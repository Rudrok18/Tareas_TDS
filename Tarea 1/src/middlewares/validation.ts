import { Request, Response, NextFunction } from "express";
import { User } from "../types/user";

export function roles(allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || !req.user.role) {
            return res.sendStatus(403);
        }

        if (allowedRoles.includes(req.user.role)) {
            return next();
        }

        return res.sendStatus(403);
    };
}