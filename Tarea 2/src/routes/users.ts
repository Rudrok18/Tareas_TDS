import { Router } from "express";
import usersController from "../controllers/users.controller";
const router = Router();

router.get('', usersController.getAll);

// endpoints comentados para que no truene el código

// router.post('/create', usersController.createUser); 

// router.post('/login', usersController.login);
export default router;
