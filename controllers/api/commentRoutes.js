const router = require('express').Router();
const { Comment } = require('../../models');
const auth = require('../../utils/auth');

// Create a new comment
router.post('/', auth, async (req, res) => {
	try {
		const createComment = await Comment.create({
			comment: req.body.commentText,
			game_id: req.body.gameId,
			// pulls user id from the session when the user logged in
			user_id: req.session.userId
		});
		res.status(200).json(createComment);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// update a comment
router.put('/:id', auth, async (req, res) => {
	try {
		const updatedComment = await Comment.update(
			{
				comment: req.body.comment,
			},
			{
				where: {
					id: req.params.id,
				}
			}
		);
		if (!updatedComment ) {
			res.status(404).json({ message: 'No comment found with this id!' });
			return;
		}
		res.status(200).json(updatedComment);
	} catch (err) {
		res.status(500).json(err);
	}
});

// delete a comment 
router.delete('/:id', auth, async (req, res) => {
	try {
		const deletedComment = await Comment.destroy({
			where: {
				id: req.params.id
			},
		});
		if (!deletedComment) {
			res.status(404).json({ message: 'No comment found with this id!' });
			return;
		}
		res.status(200).json(deletedComment);
	} catch (err) {
		res.status(500).json(err);
	}
});


module.exports = router;