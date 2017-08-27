import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';
import weather from './modules/config/module';
import sanitize from 'angular-sanitize';
import select from 'ui-select';
import translate from 'angular-translate';

require('./assets/main.scss');

var app = angular.module('app', [
  uirouter,  
  sanitize,
  select,
  'moment-picker',
  ngAnimate,
  toastr,
  weather.name,
  translate
]);

app.controller('appController', ['$scope', '$state', function($scope, $state) {
  $state.go("weather");
}]);

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'Search': 'Search',
    'City': 'City',
    'Country': 'Country',
    'Select country and city for see weather.' : 'Select country and city for see weather.',
    'Choose country': 'Choose country',
    'Choose city': 'Choose city',
    'Sunday' : 'Sunday',
    'Monday' : 'Monday',
    'Tuesday' : 'Tuesday',
    'Wednesday' : 'Wednesday',
    'Thursday' : 'Thursday',
    'Friday' : 'Friday',
    'Saturday' : 'Saturday'
  });
 
  $translateProvider.translations('pt', {
    'Search' : 'Pesquisar',
    'City': 'Cidade',
    'Country' : 'Estado',
    'Select country and city for see weather.' : 'Seleciona estado e cidade para ver o tempo.',
    'Choose country' : 'Escolha estado',
    'Choose city' : 'Escolha cidade',
    'Sunday' : 'Domingo',
    'Monday' : 'Segunda',
    'Tuesday' : 'Terça',
    'Wednesday' : 'Quarta',
    'Thursday' : 'Quinta',
    'Friday' : 'Sexta',
    'Saturday' : 'Sábado'
  });
 
  $translateProvider.preferredLanguage('en');
}]);