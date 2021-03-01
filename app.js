import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import logger from 'morgan';
import routes from './routes';
import { localsMiddleWare } from './middleWare';
import { homeRouter } from './routers/homeRouter';
import { articleRouter } from './routers/articleRouter';
import { userRouter } from './routers/userRouter';

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(localsMiddleWare);

app.use(routes.home, homeRouter);
app.use(routes.article, articleRouter);
app.use(routes.user, userRouter);

export default app;
