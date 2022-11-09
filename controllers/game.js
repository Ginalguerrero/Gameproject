const router = require('express').Router();
const { GameData, Comment, User } = require('../models');
const auth = require('../utils/auth');

// Returns Game by Id
router.get('/game/:id', auth, async (req, res) => {
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
			],
		});
		const game = gameData.get({ plain: true });
		res.render('viewByGame', {
			game,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Returns Game by Category

// Returns Game By Publisher

// Returns Game Platforms 

// Returns Game Genres

// Returns Game Price 
 
module.exports = router;