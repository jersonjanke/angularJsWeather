import {getCitys} from '../../data/City';

class WeatherController {
  /*@ngInject*/

  constructor($stateParams, toastr, weatherService, $filter) {
    this.$filter = $filter;
    this.weatherService = weatherService;
    this.$stateParams = $stateParams;
    this.toastr = toastr;    
    this.loading = false;     
    this.country = getCitys().estados;    
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

  getCitysByCountry(country) {  
    this.city = this.$filter('filter')(this.country, function(val) {
      if(val.sigla === country.sigla) {
        return val;
      }
    });    
  }
}

export default WeatherController;
