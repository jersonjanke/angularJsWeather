import { getWeatherUrl } from '../../core/Api.js';

function WeatherService($http, $q, $translate) {

  var service = {};

  service.getWeatherData = getWeatherData;

  /**
   * Return data weather
   * @return {*}
   */
  function getWeatherData(city) {
    let future = $q.defer();
    $http.get(getWeatherUrl(city, $translate.use()), {
    })
      .then(response => {
        future.resolve(response.data);
      })
      .catch(data => {
        future.reject(data);
      });

    return future.promise;
  }

  return service;
}

export default WeatherService;