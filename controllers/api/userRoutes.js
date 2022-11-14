const router = require('express').Router();
const { User } = require('../../models');
const auth = require('../../utils/auth');


// Create new user
router.post('/signup', async (req, res) => {
	try {
		const userData = await User.create({
			user_name: req.body.userLogin,
			password: req.body.password
		});

		req.session.save(() => {
			// saves the users logged in statue
			req.session.loggedIn = true;
			// saves the user profile Id
			req.session.userId = userData.id;
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
				user_name: req.body.userLogin,
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
			// saves the users logged in statue
			req.session.loggedIn = true;
			// saves the user profile Id
			req.session.userId = userData.id;
			res.status(200)
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

// update user name
router.put('/', auth, async (req, res) => {
	try {
		const updateUser = await User.update(
            {
                user_name: req.body.user_name
            },
			{
				where: {
					id: req.session.userId
				}
			}
		);
		if (!updateUser ) {
			res.status(404).json({ message: 'issue updating your user name, please try again.' });
			return;
		}
		res.status(200).json(updateUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

// update user password
router.put('password', auth, async (req, res) => {
	try {
		const updatePassword = await User.update(
            {
                password: req.body.password
            },
			{
				where: {
					id: req.session.userId,
				}
			}
		);
		if (!updatePassword ) {
			res.status(404).json({ message: 'issue updating your password, please try again.' });
			return;
		}
		res.status(200).json(updatePassword);
	} catch (err) {
		res.status(500).json(err);
	}
});

// delete a user account
router.delete('/', auth, async (req, res) => {
	try {
		const deletedUser = await User.destroy({
			where: {
				id: req.session.userId
			},
		});
		if (!deletedUser) {
			res.status(404).json({ message: 'Account destroyed' });
			return;
		}
		res.status(200).json(deletedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
