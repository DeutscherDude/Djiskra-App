import express from 'express';
import { getUsers, createUser, deleteUser, updateUser, loginUser } from '../controllers/userController';

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:id').delete(deleteUser).put(updateUser);

router.route('/login').get(loginUser);

export { router as userRouter };