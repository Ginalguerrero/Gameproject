let currentPage = 1;
let items;
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
		onPageClick: function (pageNumber) {
			currentPage = pageNumber;
		}	
      });
    });
});

// function recallPagination(){
// 	$('#pagination').pagination({
//         items: items,
//         itemsOnPage: 18,
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



// $(function() {
//     $(#pagination).pagination('getCurrentPage');
// });

// $(function() {
//     $('#pagination').pagination('selectPage', pageNumber);
// });

// $(function() {
//     $('#pagination').pagination('prevPage');
// });

// $(function() {
//     $('#pagination').pagination('nextPage');
// });



/*
function handlePagination(totalNumber, searchInputResult, searchInputOneResult) {

	else{
		$(paginator).pagination({ 
			items: totalNumber,
			itemsOnPage: showApiPerPage,
			currentPage: currentPage,
			onPageClick: function (pageNumber, event) {
				currentPage = pageNumber;
				getJobsAPI (searchInputResult, searchInputOneResult); }
	 	});
	}
}

function getJobsAPI (searchInputResult, searchInputOneResult) {


	fetch(jobsApiUrl)
		.then(response => response.json())
		.then(response => {
			switchPage (false);
			var dataList = response.results;
			var totalNumber = response.count;
			displayVacancyResult (dataList);
			generateHistoryRecord (searchInputResult, searchInputOneResult);
			handlePagination(totalNumber, searchInputResult, searchInputOneResult);
		})
		.catch(err => console.error(err));
}

*/
