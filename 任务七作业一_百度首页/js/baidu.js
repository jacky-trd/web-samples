/**
 * Created by Happiness on 2017/4/25.
 */
$(document).ready(function () {
    getWeather();

})

//function to get weather
function getWeather() {
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'getName',
        url: 'http://api.asilu.com/weather/',
        data: {
            "city": "北京"
        },
        success: function (data) {
            console.log(data);
            console.log(data.weather[0].date);
            $(".date").text(data.weather[0].date);
            $(".temperature").text(data.weather[0].temp);
            $(".weather-status").text(data.weather[0].weather);
            $(".wind").text(data.weather[0].wind);
        }
    })
}