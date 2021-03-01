export const changePassword = (req, res) => {
	res.render('changePassword', {
		pageTitle: 'Change Password'
	});
};
export const editProfile = (req, res) => {
	res.render('editProfile', {
		pageTitle: 'Edit Profile'
	});
};

export const userProfile = (req, res) => {
	res.render('userProfile', {
		pageTitle: 'User Profile'
	});
};

export const upload = (req, res) => {
	res.render('upload', {
		pageTitle: 'Upload'
	});
};
