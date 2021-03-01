export const home = (req, res) => {
	res.render('home', {
		pageTitle: 'Home'
	});
};

export const login = (req, res) => {
	res.render('login', {
		pageTitle: 'Login'
	});
};

export const logout = (req, res) => {
	res.redirect(home);
};

export const join = (req, res) => {
	res.render('join', {
		pageTitle: 'Join'
	});
};

export const search = (req, res) => {
	const {
		query: { term: searchingBy }
	} = req;

	res.render('search', {
		pageTitle: `Search : ${searchingBy}`,
		searchingBy
	});
};
