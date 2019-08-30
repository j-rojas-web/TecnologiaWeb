let weatherRequest = new XMLHttpRequest();

let apiURLstring = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=144723673b4b8f8845aafd72adae233d";
weatherRequest.open("GET", apiURLstring, true);
weatherRequest.send();
 
weatherRequest.onload = function(){
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("cc-temp").innerHTML = weatherData.main.temp;
    let icon = "http://openweathermap.org/img/wn/"+ weatherData.weather[0].icon + "font.png";
    let desc = weatherData.weather[0].description;
    document.getElementById("cc-img").setAttribute("src", icono);
    document.getElementById("cc-img").setAttribute("alt", desc);

}