import express from 'express';
import routes from '../routes';
import { articleDetail, deleteArticle, editArticle, upload } from '../controllers/articleController';

export const articleRouter = express.Router();

articleRouter.get(routes.editArticle, editArticle);
articleRouter.get(routes.deleteArticle, deleteArticle);
articleRouter.get(routes.articleDetail, articleDetail);
