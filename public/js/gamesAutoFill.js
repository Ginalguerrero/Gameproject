
const games = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
    ];


// function getGameNames(){
// fetch("")
// $('#search').autocomplete({source: games});
// }

// $(function async() {
//     const names = await fetch('https://restcountries.com/v3.1/all');
//          .json();
     
//       .then(function (data) {
//       for(let i=0; ; i++){
//       let titles = data[i].name.common;
//       countryArr.push(titles);
//     }});
  
//     $('#search').autocomplete({
//       source: games,
//     });
//   });

//   $(function () {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(function (response) {
//           return response.json();
//       })
//       .then(function (data) {
//       for(let i=0; i<250; i++){
//       let titles = data[i].name.common;
//       countryArr.push(titles);
//     }});
  
//     $('#search').autocomplete({
//       source: countryArr,
//     });
//   });

// $('#search').on("click", getGameNames);
$('#search').autocomplete({source: games});
