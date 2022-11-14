const games = [];

function getGameNames() {
  fetch("/game/name")
    .then(function (response) {
      return response.json();
    })
    .then(function (names) {
      names.forEach((name) => {
        games.push(name.name);
      });
    });

  $("#search").autocomplete({
    source: games,
  });

  $("#searchside").autocomplete({
    source: games,
  });
}

$('#search').on("click", getGameNames);
$('#searchside').on("click", getGameNames);



