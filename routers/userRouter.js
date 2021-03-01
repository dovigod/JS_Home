import express from 'express';
import routes from '../routes';
import { changePassword, editProfile, userProfile, upload } from '../controllers/userController';

export const userRouter = express.Router();

userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.upload, upload);
userRouter.get(routes.userProfile, userProfile);
