import angular from 'angular';
import routes from './route';
import AboutCtrl from '../about/about.controller';
import WeatherCtrl from '../weather/weather.controller';
import WeatherService from '../weather/weather.service';

const exports = { name: 'weather' };

angular.module(exports.name, [])
  .controller('aboutCtrl', AboutCtrl)
  .controller('weatherCtrl', WeatherCtrl)
  .service('weatherService', WeatherService)
  .config(routes);

export default exports;
