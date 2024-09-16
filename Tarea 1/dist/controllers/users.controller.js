"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: '1', name: 'John Doe', role: 'admin' },
    { id: '2', name: 'Rodrigo Lopez', role: 'user' }
];
const findAll = (req, res) => {
    return res.json(users);
};
const createUser = (req, res) => {
    const { id, name, role } = req.body;
    if (!id || !name || !role) {
        return res.status(400).json({ message: 'Mising data' });
    }
    const newUser = { id, name, role };
    users.push(newUser);
    res.status(201).json(newUser);
};
exports.default = { findAll, createUser };
