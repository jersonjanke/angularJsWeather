class WeatherController {
  /*@ngInject*/

  constructor($stateParams, toastr, weatherService) {
    this.weatherService = weatherService;
    this.$stateParams = $stateParams;
    this.toastr = toastr;    
  }

  /**
   * Return weather data
   * @return {*}
   */
  getWeatherData(city) {
    return this.weatherService.getWeatherData(city).then(response => {
      this.model = response;
    });
  }

  search(city) {
    this.getWeatherData(city);
  }

  getImage(icon) {
    return `http://openweathermap.org/img/w/${icon}.png`
  }
}

export default WeatherController;
