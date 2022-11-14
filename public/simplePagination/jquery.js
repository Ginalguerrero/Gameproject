// jQuery(function async($) {
//   fetch("/game")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (games) {
//         let displayedGames = games;
//         let numPages = displayedGames.length;
//         let perPage = 20;
//         pageParts.slice(perPage).hide();
//         $('#page-nav').pagination({
//           items: numPages,
//           itemsOnPage: perPage,
//           cssStyle: "light-theme",
//   		onPageClick: function (pageNum) {
//         let start = perPage * (pageNum - 1);
//         let end = start + perPage;
//         pageParts.hide()
//         .slice(start, end).show();
//   		}	
//         });
//       });
// });

let window = window.location.href.split('/');
let currentPage = parseInt(window[window.length - 1]);

$(function () {
  fetch("/game/name")
    .then(function (response) {
      return response.json();
    })
    .then(function (names) {
      let items = names.length;
      $('#pagination').pagination({
        items: items,
        itemsOnPage: 20,
        cssStyle: "light-theme",
		currentPage: currentPage,
		onPageClick: function (pageNumber, event) {
      event.preventDefault();
      console.log(currentPage);
      console.log(pageNumber);
		
			currentPage = pageNumber;
		}	
      });
    });
});

// function recallPagination(){
// 	$('#pagination').pagination({
//         items: items,
//         itemsOnPage: 20,
//         cssStyle: "light-theme",
// 		currentPage: currentPage,
// 		onPageClick: function (pageNumber) {
// 			currentPage = pageNumber;
// 			recallPagination(); 
// 		}	
//       });
// }


// function displayPagination(){
// 	fetch("/game/name")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (names) {
//       items = names.length;
//       recallPagination(); 
//     });
// }


// displayPagination();
