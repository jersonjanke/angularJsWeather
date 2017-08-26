import {getCityUrl, getWeatherUrl} from '../../core/Api.js';

class WeatherService {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  /**
   * Return data weather
   * @return {*}
   */  
  getWeatherData(city) {
    let future = this.$q.defer();
    this.$http.get(getWeatherUrl(city), {
    })
      .then(response => {
        future.resolve(response.data);
      })
      .catch(data => {
        future.reject(data);
      });

    return future.promise;
  }  

  getCity(search) {
    let future = this.$q.defer();
    this.$http.get(getCityUrl(search), {
    }).then(response => {
      future.resolve(response);
    })
    .catch(data => {
      future.reject(data);
    });

    return future.promise;
  }

}

export default WeatherService;