const router = require('express').Router();
const axios = require("axios");
require('dotenv').config();

router.get('/', async (req, res) => {
	try {
		const games = {
            method: 'GET',
            url: 'https://rawg-video-games-database.p.rapidapi.com/games?page=1&page_size=5',
            headers: {
              'X-RapidAPI-Key': process.env.API_KEY,
              'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com/games'
            }
          };
          // https://rawg-video-games-database.p.rapidapi.com/games?page=1&page_size=5
          axios.request(games).then(function (response) {
              console.log(response.data.get({ plain: true }));
              res.json(response.data);
          }).catch(function (error) {
              console.error(error);
          });
        
		// res.render('home', {
		// 	games,
		// 	loggedIn: req.session.loggedIn,
		// });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;