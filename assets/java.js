let recent = JSON.parsel(localStorage.getItem('Recent Searched'));
let apiKey = "1d19cda4c60cdb1c9b264ede49ac9a5e";
let recentlySearched = [];
if (recent === null) {
    recentlySearched =  ['Prior City','Prior City', 'Prior City', 'Prior City', 'Prior City','Prior City','Prior City'];

} else {
    recentlySearched = recent;
    for(i = 0 < recentlySearched.length; i++) {
        $('#prev' + i).text(recentlySearched[i]);
    }
}
// making it so that the recently searched city shows up
$('#searchBtn').click(function(event) {
    event.preventDefault();
    let insert = $('.searchCity').val();
    placeWeather(insert);
    for (i = recentlySearched.length - 1; i > 0; i--) {
        recentlySearched[i] = recentlySearched[i -i];
    }
    recentlySearched[0] = insert;
    localStorage.setItem("Recently Searched", JSON.stringify(recentlySearched));
    for (i = 0; i < recentlySearched.length; i++) {
        $('#prev' + i).text(recentlySearched[i]);
    }
});

// $('.btn-secondary').click(fucntion() {
//     .preventDefault()
// }
// )
function placeWeather(city) {
    var queryUrl= 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&appid=" + apiKey + "&units=imperial";
    fetch (queryUrl).then(response => response.json()).then(data =>) ;
    

}




