"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = roles;
function roles(allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return res.sendStatus(403);
        }
        if (allowedRoles.includes(req.user.role)) {
            return next();
        }
        return res.sendStatus(403);
    };
}
