//home
const HOME = '/';
const LOGIN = '/login';
const LOGOUT = '/logout';
const JOIN = '/join';

//user
const USER = '/user';
const USER_PROFILE = '/:id';
const CHANGE_PASSWORD = '/change-password';
const EDIT_PROFILE = '/edit-profile';

// article

const ARTICLE = '/article';
const ARTICLE_DETAIL = '/:id';
const UPLOAD = '/upload';
const EDIT_ARTICLE = '/edit';
const DELETE_ARTICLE = '/delete';

const routes = {
	home: HOME,
	login: LOGIN,
	logout: LOGOUT,
	join: JOIN,

	//user
	user: USER,
	userProfile: USER_PROFILE,
	changePassword: CHANGE_PASSWORD,
	editProfile: EDIT_PROFILE,

	//article
	article: ARTICLE,
	articleDetail: ARTICLE_DETAIL,
	upload: UPLOAD,
	editArticle: EDIT_ARTICLE,
	deleteArticle: DELETE_ARTICLE
};

export default routes;
