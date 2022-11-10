const router = require('express').Router();

const homePage = require('./home');
const gamePage = require('./game');
// const externalGames = require('./externalGames');

router.use('/', homePage);
router.use('/game', gamePage);
// router.use('/games', externalGames);

module.exports = router;
