// let recent = JSON.parse(localStorage.getItem("Recently Searched"));
// let apiKey = "1d19cda4c60cdb1c9b264ede49ac9a5e";
// let recentlySearched = [];
// if (recent === null) {
//     recentlySearched =  ['Prior City','Prior City', 'Prior City', 'Prior City', 'Prior City','Prior City','Prior City'];

// } else {
//     recentlySearched = recent;
//   for (i = 0; i < recentlySearched.length; i++) {
//     $("#prev" + i).text(recentlySearched[i]);
//   }
// }
// // making it so that the recently searched city shows up
// $('#searchBtn').click(function(event) {
//     event.preventDefault();
//     let insert = $('.searchCity').val();
//     placeWeather(insert);
//     for (i = recentlySearched.length - 1; i > 0; i--) {
//         recentlySearched[i] = recentlySearched[i -i];
//     }
//     recentlySearched[0] = insert;
//     localStorage.setItem("Recently Searched", JSON.stringify(recentlySearched));
//     for (i = 0; i < recentlySearched.length; i++) {
//         $('#prev' + i).text(recentlySearched[i]);
//     }
// });

// $(".btn-secondary").click(function(event) {
//     event.preventDefault();
//     placeWeather($("#" + event.target.id).text());
//   });

// function placeWeather(city) {
//     let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" +apiKey +"&units=imperial";
//   fetch(queryURL)
//     .then(response => response.json())
//     .then(data => {
//       var latitude = data.coord.latitude;
//       var longitude = data.coord.longitude;
//       let queryUrl2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid' + apiKey + '&units=imperial&exclude=hourly,minutely';
//     fetch(queryUrl2).then(response => response.json().then(data => {
//         for (i =0; i <=5; i++) {
//             let date = new Date(data.daily[i].dt * 1000);
//             let dateFormat = date.toLocaleDateString();
//             let img = data.daily[i].weather[0].icon;
//             $('#' + i).children('h3').text(dateFormat);
//             $('#' + i).children('img').attr("src","https://openweathermap.org/img/wn/" + img + "@2x.png");
//             $('#' + i).children('.temp').text('Temp: ' + data.daily[i].temp.day);
//             $('#' +i).children('.wind').text('Wind: ' +data.daily[i].wind_speed);
//             $('#' +i).children('.humidity').text('Humidity: ' +data.daily[i].humidity + '%');
//         }
//         if (data.daily[0].uvi <= 4) {
//             $("#0").children(".UV").css("background-color", "green");
//           } else if (data.daily[0].uvi <= 8) {
//             $("#0").children(".UV").css("background-color", "yellow");
//           } else if (data.daily[0].uvi > 8) {
//             $("#0").children(".UV").css("background-color", "red");
//           }

//     }))
//     }
//     ) ;


    

// };

// function placeWeather() {
//     var queryURL ="https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=" +city;
//     var queryURL2 ="https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=" +city;
//     var latitudeitude;
//     var longitude;

//     $ajax({
//         url: queryURL,
//         method:'GET'
//     }).then(function(weather){
//         console.log(queryURL);
//         console.log(weather);

//         let nowMoment = moment();
        
//         const showMoment = $("<h3");
//         $
//     })

// }


function createCityList(citySearchList) {
    $("#city-list").empty();
  
    var keys = Object.keys(citySearchList);
    for (var i = 0; i < keys.length; i++) {
      var cityListEntry = $("<button>");
      cityListEntry.addClass("list-group-item list-group-item-action");
  
      var splitStr = keys[i].toLowerCase().split(" ");
      for (var j = 0; j < splitStr.length; j++) {
        splitStr[j] =
          splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
      }
      var titleCasedCity = splitStr.join(" ");
      cityListEntry.text(titleCasedCity);
  
      $("#city-list").append(cityListEntry);
    }
  }
  
  function currentCityWeather(city, citySearchList) {
    createCityList(citySearchList);
  
    var queryURL ="https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=" +city;
    var queryURL2 ="https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=" +city;
  
    var latitude;
  
    var longitude;
  
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(weather) {

        console.log(queryURL);
  
        console.log(weather);
  
        var nowMoment = moment();
  
        var displayMoment = $("<h3>");
        $("#city-name").empty();
        $("#city-name").append(
          displayMoment.text("(" + nowMoment.format("M/D/YYYY") + ")")
        );
  
        var cityName = $("<h3>").text(weather.name);
        $("#city-name").prepend(cityName);
  
        var weatherIcon = $("<img>");
        weatherIcon.attr(
          "src",
          "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
        );
        $("#current-icon").empty();
        $("#current-icon").append(weatherIcon);
  
        $("#current-temp").text("Temperature: " + weather.main.temp + " °F");
        $("#current-humidity").text("Humidity: " + weather.main.humidity + "%");
        $("#current-wind").text("Wind Speed: " + weather.wind.speed + " MPH");
  
        latitude = weather.coord.lat;
        longitude = weather.coord.lon;
  
        var queryURL3 ="https://api.openweathermap.org/data/2.5/uvi/forecast?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=" +"&lat=" +latitude +"&lon=" +longitude;
  
        $.ajax({
          url: queryURL3,
          method: "GET"
          
        }).then(function(uvIndex) {
          console.log(uvIndex);
  
          var uvIndexDisplay = $("<button>");
          uvIndexDisplay.addClass("btn btn-danger");
  
          $("#current-uv").text("UV Index: ");
          $("#current-uv").append(uvIndexDisplay.text(uvIndex[0].value));
          console.log(uvIndex[0].value);
  
          $.ajax({
            url: queryURL2,
            method: "GET"
          }).then(function(forecast) {
            console.log(queryURL2);
  
            console.log(forecast);
            
            for (var i = 6; i < forecast.list.length; i += 8) {
              var forecastDate = $("<h5>");
  
              var forecastPosition = (i + 2) / 8;
  
              console.log("#forecast-date" + forecastPosition);
  
              $("#forecast-date" + forecastPosition).empty();
              $("#forecast-date" + forecastPosition).append(
                forecastDate.text(nowMoment.add(1, "days").format("M/D/YYYY"))
              );
  
              var forecastIcon = $("<img>");
              forecastIcon.attr(
                "src",
                "https://openweathermap.org/img/w/" +
                  forecast.list[i].weather[0].icon +
                  ".png"
              );
  
              $("#forecast-icon" + forecastPosition).empty();
              $("#forecast-icon" + forecastPosition).append(forecastIcon);
  
              console.log(forecast.list[i].weather[0].icon);
  
              $("#forecast-temp" + forecastPosition).text(
                "Temp: " + forecast.list[i].main.temp + " °F"
              );
              $("#forecast-humidity" + forecastPosition).text(
                "Humidity: " + forecast.list[i].main.humidity + "%"
              );
  
              $(".forecast").attr(
                "style",
                "background-color:dodgerblue; color:white"
              );
            }
          });
        });
      });
  }
  
  $(document).ready(function() {
    var citySearchListStringified = localStorage.getItem("citySearchList");
  
    var citySearchList = JSON.parse(citySearchListStringified);
  
    if (citySearchList == null) {
      citySearchList = {};
    }
  
    createCityList(citySearchList);
  
    $("#current-weather").hide();
    $("#forecast-weather").hide();
  
    $("#search-button").on("click", function(event) {
      event.preventDefault();
      var city = $("#city-input")
        .val()
        .trim()
        .toLowerCase();
  
      if (city != "") {
        citySearchList[city] = true;
      localStorage.setItem("citySearchList", JSON.stringify(citySearchList));
  
      currentCityWeather(city, citySearchList);
  
      $("#current-weather").show();
      $("#forecast-weather").show();
      }
      
    });
  
    $("#city-list").on("click", "button", function(event) {
      event.preventDefault();
      var city = $(this).text();
  
      currentCityWeather(city, citySearchList);
  
      $("#current-weather").show();
      $("#forecast-weather").show();
    });
  });