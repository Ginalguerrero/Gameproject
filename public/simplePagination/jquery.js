$(function() {
    $(pagination).pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});
/*
function handlePagination(totalNumber, searchInputResult, searchInputOneResult) {
	if(totalNumber===0){
	 	vacanciesEmptyEl.classList.remove("hidden");
	 	paginator.classList.add("hidden");
	}
	else{
	 	vacanciesEmptyEl.classList.add("hidden");
		paginator.classList.remove("hidden");
		$(paginator).pagination({ //get from simplePagination library website
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
	var apiId = 'f79154d7';
	var apiKey = '2423d428da62311114e0eebc8ee7e7e8'
	var jobsApiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/${currentPage}?app_id=${apiId}&app_key=${apiKey}&results_per_page=${showApiPerPage}&what=${searchInputResult}&where=${searchInputOneResult}&content-type=application/json`;

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