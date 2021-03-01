import express from 'express';
import { home, join, login, logout } from '../controllers/homeController';
import routes from '../routes';

export const homeRouter = express.Router();

homeRouter.get('/', home);

homeRouter.get(routes.login, login);
homeRouter.get(routes.logout, logout);
homeRouter.get(routes.join, join);

