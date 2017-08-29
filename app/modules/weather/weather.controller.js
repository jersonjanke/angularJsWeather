import angular from 'angular';
import {getCitys} from '../../data/City';

function WeatherController($scope, $stateParams, toastr, weatherService, $filter) {
  /*@ngInject*/
  var vm = this;

  /**
   * Methods
   */
  vm.getCitysByCountry = getCitysByCountry;
  vm.search = search;
  vm.getImage = getImage;
  vm.getConvertDate = getConvertDate;
  vm.getNameWeek = getNameWeek;

  /**
   * Constructor
   */
  constructor();

  function constructor() {
    vm.country = getCitys().estados;
  }

  /**
   * Return weather data
   * @return {*}
   */
  function getWeatherData(city) {
    vm.loading = true;
    return weatherService.getWeatherData(city).then(response => {
      vm.model = response;
      vm.loading = false;
    });
  }

  function search(city) {
    getWeatherData(city);
  }

  /**
   * Concat url and icon
   * @param {*} icon
   */
  function getImage(icon) {
    return `http://openweathermap.org/img/w/${icon}.png`
  }

  /**
   * Format date pt-br
   * @param {*} date
   */
  function getConvertDate(date) {
    return moment.unix(date).format('DD/MM/YYYY');
  }

  function getNameWeek(date) {
    return $filter('translate')(moment.unix(date).format('dddd'));
  }

  function getCitysByCountry(country) {
    vm.city = $filter('filter')(vm.country, function (val) {
      if (val.sigla === country.sigla) {
        return val;
      }
    });
  }

}

export default WeatherController;
