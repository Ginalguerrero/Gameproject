const router = require('express').Router();

const homePage = require('./home');
const gamePage = require('./game');

router.use('/', homePage);
router.use('/game', gamePage);

module.exports = router;
