import express from 'express';
import routes from '../routes';

export const homeRouter = express.Router();

const homeController = (req, res) => {
	res.send('im home!!');
};
homeRouter.use('/', homeController);
