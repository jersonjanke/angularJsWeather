class WeatherController {
  /*@ngInject*/

  constructor($stateParams, toastr, weatherService) {
    this.weatherService = weatherService;
    this.$stateParams = $stateParams;
    this.toastr = toastr;    
    this.loading = false;
  }

  /**
   * Return weather data
   * @return {*}
   */
  getWeatherData(city) {    
    this.loading = true;
    return this.weatherService.getWeatherData(city).then(response => {
      this.model = response;
      this.loading = false;
    });
  }

  search(city) {
    this.getWeatherData(city);
  }

  getImage(icon) {
    return `http://openweathermap.org/img/w/${icon}.png`
  }

  getConvertDate(date) {
    return moment.unix(date).format('DD/MM/YYYY');
  }

  getNameWeek(date) {
    return moment.unix(date).format('dddd');
  }
}

export default WeatherController;
