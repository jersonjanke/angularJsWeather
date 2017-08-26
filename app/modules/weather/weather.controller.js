class WeatherController {
  /*@ngInject*/

  constructor($stateParams, toastr, weatherService) {
    this.weatherService = weatherService;
    this.$stateParams = $stateParams;
    this.toastr = toastr;    
    this.loading = false;    
    this.getCity('Blumenau');
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

  getCity(search) {
    return this.weatherService.getCity(search).then(response => {
      console.log(response);
    });
  }

  search(city) {
    this.getWeatherData(city);
  }

  /**
   * Concat url and icon
   * @param {*} icon 
   */
  getImage(icon) {
    return `http://openweathermap.org/img/w/${icon}.png`
  }

  /**
   * Format date pt-br
   * @param {*} date 
   */
  getConvertDate(date) {
    return moment.unix(date).format('DD/MM/YYYY');
  }

  getNameWeek(date) {
    return moment.unix(date).format('dddd');
  }
}

export default WeatherController;
