import routes from './routes';

export const localsMiddleWare = (req, res, next) => {
	res.locals.siteName = 'JSH';
	res.locals.routes = routes;

	next();
};
