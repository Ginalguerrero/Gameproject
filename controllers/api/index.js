const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const gameRoutes = require('./gameRoutes');
const userRoutes = require('./userRoutes');

router.use('/comment', commentRoutes);
router.use('/game', gameRoutes);
router.use('/user', userRoutes);

module.exports = router;