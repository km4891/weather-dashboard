var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-input");
var citiesContainerEl = document.querySelector("#cities-container");
var citiesSearchTerm = document.querySelector("#cities-search-term");


var getUserRepos = function(cityName) {
    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=7ad577f94ffbc59a26490910c626df8b";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        displayCurrentWeather(data, cityName)
      });
    });
  };

  var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();

if (cityName) {
  getUserRepos(cityName);
  cityInputEl.value = "";
} else {
  alert("Please enter a valid city");
}
  };



    


  cityFormEl.addEventListener("submit", formSubmitHandler);
