module.exports = {
    getWeatherUrl: function (city, lang) {        
        return `http://api.openweathermap.org/data/2.5/forecast/daily?appid=e6d7534de04ba7a32d815f09759af580&units=metric&cnt=8&lang=${lang}&q=${city}`;
    }
};