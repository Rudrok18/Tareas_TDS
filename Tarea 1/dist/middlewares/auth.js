"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const secretKey = '12345';
function authMiddleware(req, res, next) {
    // const token = req.headers.authorization;
    const key = req.query.key;
    if (key === secretKey) {
        const user = {
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
