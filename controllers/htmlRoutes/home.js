const router = require('express').Router();
const { GameData } = require('../../models');

// login Page
router.get('/login', async (req, res) => {
	res.render('login');
});

// Main page home route
router.get('/:page', async (req, res) => {
	const pageNumber = parseInt(req.params.page);
	const pageLimit = 18;
	const pageOffset = pageNumber === 0 ? 0 : pageLimit * pageNumber;
	try {
		const allGames = await GameData.findAll({
			limit: pageLimit,
			offset: pageOffset,
		});
		const displayGames = allGames.map((game) => game.get({ plain: true }));
		res.render('home', {
			displayGames,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/',async (req, res) => {
	res.redirect('/0');
});

module.exports = router;
