const sequelize = require('../config/connection');
const seedUsers = require('./user.js')
const seedGameData = require('./gameData.js')
const seedComments = require('./comments.js')
const seedScreenShots = require('./screenShots.js')

const seedAll = async () => {
	await sequelize.sync({ force: true });
	await seedGameData();
	await seedScreenShots();
	await seedUsers();
	await seedComments();
	process.exit(0);
};

seedAll();
