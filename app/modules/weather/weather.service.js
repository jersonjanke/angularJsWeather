import {getWeatherUrl} from '../../core/Api.js';

class WeatherService {

  constructor($http, $q, $translate) {
    this.$http = $http;
    this.$q = $q;
    this.$translate = $translate;    
  }

  /**
   * Return data weather
   * @return {*}
   */  
  getWeatherData(city) {
    let future = this.$q.defer();
    this.$http.get(getWeatherUrl(city, this.$translate.use()), {
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