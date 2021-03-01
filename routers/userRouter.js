import express from 'express';
import routes from '../routes';
import { changePassword, editProfile, userProfile } from "../controllers/userController";


export const userRouter = express.Router();

userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userProfile, userProfile);
