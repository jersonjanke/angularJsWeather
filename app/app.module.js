import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';
import weather from './modules/config/module';
import sanitize from 'angular-sanitize';
import select from 'ui-select';

require('./assets/main.scss');

var app = angular.module('app', [
  uirouter,  
  sanitize,
  select,
  'moment-picker',
  ngAnimate,
  toastr,
  weather.name
]);

app.controller('appController', ['$scope', '$state', function($scope, $state) {
  $state.go("weather");
}]);