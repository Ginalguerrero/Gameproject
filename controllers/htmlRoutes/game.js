const router = require('express').Router();
const { GameData, Comment, User, ScreenShots } = require('../../models');
const auth = require('../../utils/auth');

// Returns Game by user Id includes comments
// TODO: put the auth back
router.get('/:id', async (req, res) => {
	try {
		const gameData = await GameData.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['user_name'],
				},
				{
					model: Comment,
				},
				{
					model: ScreenShots,
					where: {
						game_id: req.params.id
					}
				},

			],
		});
		const game = gameData.get({ plain: true });
	
		res.render('game', {
			game,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Returns Game by Category
router.get('/category/:category', auth, async (req, res) => {
	try {
		const games = await GameData.findAll({
			where: {
				category: req.params.category,
			},
		});
		const displayGames = games.map( game => game.get({ plain: true }));
		res.render('', {
			displayGames,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Returns Game By Publisher
router.get('/publisher/:publisher', auth, async (req, res) => {
	try {
		const games = await GameData.findAll({
			where: {
				publisher: req.params.publisher,
			},
		});
		const displayGames = games.map( game => game.get({ plain: true }));
		res.render('', {
			displayGames,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Returns Game Platforms
router.get('/publisher/:platform', auth, async (req, res) => {
	try {
		const games = await GameData.findAll({
			where: {
				platform: req.params.platform,
			},
		});
		const displayGames = games.map( game => game.get({ plain: true }));
		res.render('', {
			displayGames,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Returns Game Genres
router.get('/genres/:genres', auth, async (req, res) => {
	try {
		const games = await GameData.findAll({
			where: {
				genres: req.params.genres,
			},
		});
		const displayGames = games.map( game => game.get({ plain: true }));
		res.render('', {
			displayGames,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Returns Game Price: asc or desc
router.get('/price/:orderBy', auth, async (req, res) => {
	try {
		const games = await GameData.findAll({
			order:[[
				"price", req.params.orderBy 
			]]
		});
		const displayGames = games.map( game => game.get({ plain: true }));
		res.render('', {
			displayGames,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
