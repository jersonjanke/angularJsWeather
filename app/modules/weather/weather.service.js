class WeatherService {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  /**
   * Retorna lista com todas competências
   * @return {*}
   */  
  getWeatherData(city) {
    let future = this.$q.defer();
    this.$http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?appid=e6d7534de04ba7a32d815f09759af580&units=metric&cnt=8&lang=en&q=${city}`, {
    })
      .then(response => {
        future.resolve(response.data);
      })
      .catch(data => {
        future.reject(data);
      });

    return future.promise;
  }
}

export default WeatherService;