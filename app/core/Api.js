module.exports = {
    getCityUrl: function(search) {
        return `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search}&types=(cities)&language=pt_BR&key=AIzaSyCUSfFVNB25reCkM0ZD1FCq0Vn1Khp-l-Q`;
    },
    getWeatherUrl: function(city) {
        return `http://api.openweathermap.org/data/2.5/forecast/daily?appid=e6d7534de04ba7a32d815f09759af580&units=metric&cnt=8&lang=en&q=${city}`;
    }
};