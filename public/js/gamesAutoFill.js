const games = [];
const gameIds = [];
const searchResult = document.querySelector('#search');

function getGameNames() {
	fetch('/game/name')
		.then(function (response) {
			return response.json();
		})
		.then(function (names) {
			names.forEach((name) => {
				games.push(name.name);
				gameIds.push(name.id);
			});
		});

	$('#search').autocomplete({
		source: games,
	});
}

searchResult.addEventListener('keydown', async (event) => {
	if (event.key === 'Enter') {
		let validate = event.target.value;
		let onList = 0;
		let gameId;
		for (let i = 0; i < games.length; i++) {
			if (validate === games[i]) {
				onList = 1;
				gameId = gameIds[i];
			}
		}
		if (onList === 1) {
			let id = gameId;
				document.location.replace(`/game/${id}`);
		} else {
			alert('Please enter another game name');
		}
	}
});

<<<<<<< HEAD
$('#search').on('click', getGameNames);
=======



>>>>>>> eb31239c36d58dc8f41c0041a09ca3ee0fc98f82
