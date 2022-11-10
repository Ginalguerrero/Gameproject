const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/signup', async (req, res) => {
	try {
		const userData = await User.create({
			user_name: req.body.user_name,
			password: req.body.password,
		});
		req.session.save(() => {
			req.session.loggedIn = true;
			res.status(200).json(userData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Login
router.post('/login', async (req, res) => {
	try {
		const userData = await User.findOne({
			where: {
				user_name: req.body.user_name,
			},
		});

		const validPassword = await userData.checkPassword(req.body.password);

		if (!validPassword || !userData) {
			res
				.status(400)
				.json({ message: 'Incorrect User ID or Password. Please try again!' });
			return;
		}

		req.session.save(() => {
			req.session.loggedIn = true;
			res
				.status(200)
				.json({ user: userData, message: 'successfully logged in!' });
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Logout
router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
