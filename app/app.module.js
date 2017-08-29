import angular from 'angular';
import weather from './modules/config/module';
import components from './components/language/component';
import header from './components/header/component';
import card from './components/card-weather/component';
import core from './core/module';
import scss from './assets/main.scss';

var app = angular.module('app', [ 
  core.name,
  components.name,
  header.name,
  weather.name,  
  card.name
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