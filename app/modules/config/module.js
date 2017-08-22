import angular from 'angular';
import routes from './route';
import weatherCtrl from '../weather/weather.controller';
import weatherService from '../weather/weather.service';

const exports = {name: 'weather'};

angular.module(exports.name, [])
  .controller('weatherCtrl', weatherCtrl)
  .service('weatherService', weatherService)
  .config(routes);

export default exports;
