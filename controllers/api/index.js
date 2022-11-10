const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/comment', commentRoutes);
router.use('/user', userRoutes);

module.exports = router;