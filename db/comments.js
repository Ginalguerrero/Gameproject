const { Comment } = require('../models');

// Seeds the Comments table first
const comments = [
	{
		comment: "That is the best game I have ever played in my life",
		user_id: 1,
        game_id: 1
	},
	{
		comment: "I will never play this game again, it keeps lagging",
		user_id: 3,
        game_id: 3
	},
	{
		comment: "The game graph is so so bad, I will never play it again ",
		user_id: 2,
        game_id: 2
	},
	{
		comment: "Recommend to play it",
		user_id: 1,
        game_id: 3
	},

];

const seedComment = () => Comment.bulkCreate(comments);
module.exports = seedComment;