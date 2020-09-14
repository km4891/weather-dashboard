var getCurrentWeather = function() {
    var openWeatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=7ad577f94ffbc59a26490910c626df8b";
    fetch(openWeatherApi)

}

getCurrentWeather(memphis);