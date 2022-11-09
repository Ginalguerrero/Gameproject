const router = require('express').Router();

const apiRoutes = require('./api');
const homePage = require('./home');
const gamePage = require('./game');

router.use('/api', apiRoutes);
router.use('/', homePage);
router.use('/game', gamePage);

module.exports = router;
