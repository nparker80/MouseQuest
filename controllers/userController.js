const bcrypt = require('bcryptjs');


const {
	User
} = require('../models/');
module.exports = {
//	getting users
	renderHomePage: async (req, res) => {
		res.render('globalPostsPage', {
			loggedIn: false,
		});
	},
	login: async (req, res) => {
		const { password } = req.body;
		try {
			//	first find the user with the given email address
			const userData = await User.findOne({
				where: {
					username: req.body.username
				}
			});
			const isMatchingPassword = await bcrypt.compare(password, userData.password)
			if (!isMatchingPassword) {
			return res.status(401).json({ error: 'Invalid password'});
			}
			const userFound = userData.get({ plain: true });
			if (userFound) {
				req.session.save(() => {
					req.session.loggedIn = true;
					req.session.user = userFound;
					res.json({ success: true });
				});
			}
		} catch (e) {
			console.log(e);
			res.json(e);
		}
	},
	signupHandler: async (req, res) => {
		const { email, username, password } = req.body;
		try {
			const createdUser = await User.create({
				email,
				username,
				password,
			});
			const user = createdUser.get({ plain: true });
			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = user;
				res.redirect('/api/users/gpp');
			});
		} catch (e) {
			res.json(e);
		}
	},
	loginView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/api/posts/');
		}
		res.render('login');
	},
	globalPostView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/api/posts/');
		}
		res.render('login');
	},
	signupView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/api/posts/');
		}
		res.render('signUp');
	},
	createView: (req, res) => {
		if (!req.session.loggedIn) {
			return res.render('login');
		}
		res.render('createPost',{
			loggedIn: true,
		});
	},
	logout: (req, res) => {
		req.session.destroy(() => {
			res.send({ status: true });
		});
	},
}