const { User } = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


module.exports = {
	createUser: async (req, res) => {
		const { username, email, password } = req.body;
		if (!username || !email || !password ) {
			return res.status(400).json({ error: 'You must provide a username, email, and password'});
		}
		try {
			const user = await User.create({
				username,
				email,
				password,
			});
			res.json(user);
		} catch (e) {
			res.json(e);
		}
	},
//	getting users
	renderHomePage: async (req, res) => {
		res.render('homepage');
	},
	login: async (req, res) => {

		console.log(req.body);
		try {
			//	first find the user with the given email address
			const userData = await User.findOne({
				where: {
					email: req.body.email
				}
			});

			if (User.status != "Active") {
        return res.status(401).send({
          message: "Pending Account. Please Verify Your Email!",
        });
      }
			const userFound = userData.get({ plain: true });

			console.log(userFound);
			//	check if the password from the form is the same password as the user found
			//	with the given email
			//	if that is true, save the user found in req.session.user
			console.log(userFound.password, 72);
			console.log(req.body.password, 73);
			if (userFound.password === req.body.password) {
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
		const confirmationCode = token,
		const token = jwt.sign({email: req.body.email}, config.secret)
		try {
			const createdUser = await User.create({
				email,
				username,
				password,
				confirmationCode,
			});

			user.save((err) => {
				if (err) {
					res.status(500).send({ message: err });
							 return;
						}
					 res.send({
							 message:
								 "User was registered successfully! Please check your email",
						});
	 
					nodemailer.sendConfirmationEmail(
						 User.username,
						 User.email,
						 User.confirmationCode
			);
	 });

			const user = createdUser.get({ plain: true });
			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = user;
				res.redirect('/globalPostPage');
			});
		} catch (e) {
			res.json(e);
		}
	},

	verifyUser: (req, res) => {
		User.findOne({
			confirmationCode: req.params.confirmationCode,
		})
			.then((user) => {
				if (!user) {
					return res.status(404).send({ message: "User Not found." });
				}
	
				user.status = "Active";
				user.save((err) => {
					if (err) {
						res.status(500).send({ message: err });
						return;
					}
				});
			})
			.catch((e) => console.log("error", e));
	},

	loginView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/globalPostPage');
		}
		res.render('login');
	},
	signupView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/globalPostPage');
		}
		res.render('signUp');
	},
	logout: (req, res) => {
		req.session.destroy(() => {
			res.send({ status: true });
		});
	},
}
