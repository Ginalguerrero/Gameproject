const { GameData } = require('../models');

const games = [
	{
		name: 'Day of Defeat',
		publisher: 'Valve',
		platforms: 'windows;mac;linux',
		categories: 'Multi-player;Valve Anti-Cheat enabled',
		genres: 'Action',
		game_type: 'FPS;World War II;Multiplayer',
		price: 3.99,
		description:
			'Enlist in an intense brand of Axis vs. Allied teamplay set in the WWII European Theatre of Operations. Players assume the role of light/assault/heavy infantry, sniper or machine-gunner class, each with a unique arsenal of historical weaponry at their disposal. Missions are based on key historical operations. And, as war rages, players must work together with their squad to accomplish a variety of mission-specific objectives.',
		rating: 0,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/30/header.jpg?t=1512413490',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Day of Defeat',
		publisher: 'Valve',
		platforms: 'windows;mac;linux',
		categories: 'Multi-player;Valve Anti-Cheat enabled',
		genres: 'Action',
		game_type: 'FPS;World War II;Multiplayer',
		price: 3.99,
		description:
			'Enlist in an intense brand of Axis vs. Allied teamplay set in the WWII European Theatre of Operations. Players assume the role of light/assault/heavy infantry, sniper or machine-gunner class, each with a unique arsenal of historical weaponry at their disposal. Missions are based on key historical operations. And, as war rages, players must work together with their squad to accomplish a variety of mission-specific objectives.',
		rating: 0,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/30/header.jpg?t=1512413490',
		website: 'http://www.dayofdefeat.com/',
	},
	{
		name: 'Day of Defeat',
		publisher: 'Valve',
		platforms: 'windows;mac;linux',
		categories: 'Multi-player;Valve Anti-Cheat enabled',
		genres: 'Action',
		game_type: 'FPS;World War II;Multiplayer',
		price: 3.99,
		description:
			'Enlist in an intense brand of Axis vs. Allied teamplay set in the WWII European Theatre of Operations. Players assume the role of light/assault/heavy infantry, sniper or machine-gunner class, each with a unique arsenal of historical weaponry at their disposal. Missions are based on key historical operations. And, as war rages, players must work together with their squad to accomplish a variety of mission-specific objectives.',
		rating: 0,
		game_image:
			'https://steamcdn-a.akamaihd.net/steam/apps/30/header.jpg?t=1512413490',
		website: 'http://www.dayofdefeat.com/',
	},
];

const gameData = () => GameData.bulkCreate(games);
module.exports = gameData;
