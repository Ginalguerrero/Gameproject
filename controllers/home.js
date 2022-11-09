const router = require('express').Router();
const { GameData } = require('../models');

// Main page home route
router.get('/', async (req, res) => {
	try {
		const allGames = await GameData.findAll();
		const displayGames = allGames.map( game => game.get({ plain: true }));
		res.render('home', {
			displayGames,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// login Page
router.get('/login', async (req, res) => {	
	res.render('login');	
});

module.exports = router;