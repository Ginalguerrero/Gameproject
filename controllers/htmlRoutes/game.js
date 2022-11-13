const router = require('express').Router();
const sequelize = require('../../config/connection');
const { QueryTypes } = require('sequelize');
const { GameData, Comment, User, ScreenShots } = require('../../models');
const auth = require('../../utils/auth');

router.get('/name', async (req, res) => {
	try {
		const gameNames = await GameData.findAll({
			attributes: ['name']
		});
		console.log(gameNames.get({ plain: true }));
		res.json(gameNames);
	} catch (err) {
		res.json(err);
	}
});

// Returns Game by user Id includes comments auth
router.get('/:id', auth, async (req, res) => {
	try {
		const gameData = await GameData.findByPk(req.params.id, {
			include: [
				{
					model: Comment,
					include: [{ model: User, attributes: ['user_name'] }],
				},
				{
					model: ScreenShots,
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
	let category;
	switch (req.params.category) {
		case '1':
			category = 'Single';
			break;
		case '2':
			category = 'Multi-player';
			break;
		case '3':
			category = 'Online Multi-Player';
			break;
		case '4':
			category = 'Co-op';
			break;
		case '5':
			category = 'Local Co-op';
			break;
		case '6':
			category = 'Online Co-op';
			break;
		case '7':
			category = 'Local Multi-Player';
			break;
		default:
			category = 'not an option';
	}

	try {
		const displayGames = await sequelize.query(
			'SELECT * FROM gamedata WHERE categories LIKE :categories',
			{
				replacements: { categories: `%${category}%` },
				type: QueryTypes.SELECT,
			}
		);
		res.render('home', {
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
	let genres;
	switch (req.params.genres) {
		case '1':
			genres = 'strategy';
			break;
		case '2':
			genres = 'action';
			break;
		case '3':
			genres = 'rpg';
			break;
		case '4':
			genres = 'shooter';
			break;
		case '5':
			genres = 'racing';
			break;
		case '6':
			genres = 'sport';
			break;
		default:
			genres = 'not an option';
	}

	try {
		const displayGames = await sequelize.query(
			'SELECT * FROM gamedata WHERE genres LIKE :genres',
			{
				replacements: { genres: `%${genres}%` },
				type: QueryTypes.SELECT,
			}
		);
		res.render('home', {
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
			order: [['price', req.params.orderBy]],
		});
		const displayGames = games.map((game) => game.get({ plain: true }));
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
