export const editArticle = (req, res) => {
	res.render('editArticle', {
		pageTitle: 'Edit Article'
	});
};

export const deleteArticle = (req, res) => {
	res.render('deleteArticle', {
		pageTitle: 'Delete Aritcle'
	});
};

// change page title
export const articleDetail = (req, res) => {
	res.render('articleDetail', {
		pageTitle: 'Article Detail'
	});
};
