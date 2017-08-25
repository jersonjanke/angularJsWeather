import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';
import weather from './modules/config/module';

require('./assets/main.scss');

var app = angular.module('app', [
  uirouter,  
  'moment-picker',
  ngAnimate,
  toastr,
  weather.name
]);

app.controller('appController', ['$scope', '$state', function($scope, $state) {
  $state.go("weather");
}]);