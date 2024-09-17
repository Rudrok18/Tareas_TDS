import { Router } from "express";
import usersController from '../controllers/users.controller';
import { authMiddleware } from '../middlewares/auth';
import { roles } from '../middlewares/validation';

const router = Router();

router.get('', authMiddleware, roles(['admin']), usersController.findAll);

router.post('', usersController.createUser);

export default router;