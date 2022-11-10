const { ScreenShots } = require('../models');

// Seeds the ScreenShots table first
const photos = [
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/30/0000000169.1920x1080.jpg?t=1512413490",
        game_id: 1
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/30/0000000170.1920x1080.jpg?t=1512413490",
        game_id: 1
	},
	{
		img_url: 	"https://steamcdn-a.akamaihd.net/steam/apps/30/0000000171.1920x1080.jpg?t=1512413490",
        game_id: 1
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/30/0000000172.1920x1080.jpg?t=1512413490",
        game_id: 1
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/40/0000000142.1920x1080.jpg?t=1528733362",
        game_id: 2
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/40/0000000143.1920x1080.jpg?t=1528733362",
        game_id: 2
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/40/0000000144.1920x1080.jpg?t=1528733362",
        game_id: 2
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/40/0000000145.1920x1080.jpg?t=1528733362",
        game_id: 2
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/70/0000002354.1920x1080.jpg?t=1530045175",
        game_id: 3
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/70/0000002343.1920x1080.jpg?t=1530045175",
        game_id: 3
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/70/0000002342.1920x1080.jpg?t=1530045175",
        game_id: 3
	},
	{
		img_url: "https://steamcdn-a.akamaihd.net/steam/apps/70/0000002344.1920x1080.jpg?t=1530045175",
        game_id: 3
	},

];

const seedScreenShots = () => ScreenShots.bulkCreate(photos);
module.exports = seedScreenShots;