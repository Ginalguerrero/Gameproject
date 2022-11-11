const router = require('express').Router();
const axios = require("axios");
require('dotenv').config();

router.get('/', async (req, res) => {
	try {
          axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=5`).then(function (response) {
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
// router.get('/key', async (req, res) => {
// 	try {
//           axios.get(`https://api.rawg.io/api/games?game_pk=3328&key=${process.env.API_KEY}`).then(function (response) {
//               res.json(response.data);
//           }).catch(function (error) {
//               console.error(error);
//           });

//           console.log(response);
// 		res.render('home', {
// 			games,
// 			loggedIn: req.session.loggedIn,
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });

module.exports = router;
