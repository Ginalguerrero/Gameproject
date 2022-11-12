const { User } = require('../models');

// Seeds the User table first
const users = [
	{
		user_name: "Luiz4P",
		password: 'welcome1',
        game_id: 1
	},
	{
		user_name: "Kyle4P",
		password: 'welcome1',
        game_id: 2
	},
	{
		user_name: "Preston4P",
		password: 'welcome1',
        game_id: 2
	},
	{
		user_name: "Gina4P",
		password: 'welcome1',
        game_id: 1
	}
];

const seedUsers = () => User.bulkCreate(users);
module.exports = seedUsers;