import angular from 'angular';
import uirouter from 'angular-ui-router';
import example from './example/example.module';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';
import weather from './modules/config/module';
import angularMoment from 'angular-moment';

require('./assets/main.scss');

angular.module('app', [
  uirouter,  
  angularMoment,
  'example',
  'moment-picker',
  ngAnimate,
  toastr,
  weather.name
]);
