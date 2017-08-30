import angular from 'angular';
import weather from './modules/config/module';
import components from './components/language/component';
import header from './components/header/component';
import footer from './components/footer/component';
import card from './components/card-weather/component';
import core from './core/module';
import scss from './assets/main.scss';

var app = angular.module('app', [
  core.name,
  components.name,
  header.name,
  footer.name,
  weather.name,
  card.name
]);

app.controller('appController', ['$scope', '$state', function ($scope, $state) {
  $state.go("weather");
}]);

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'Home': 'Home',
    'About': 'About',
    'Contact': 'Contact',
    'Search': 'Search',
    'City': 'City',
    'State': 'State',
    'Temperature': 'Temperature',
    'Select state and city to see the weather.': 'Select state and city to see the weather.',
    'Week temperature chart': 'Week temperature chart',
    'Week Temperature': 'Week Temperature',
    'Choose state': 'Choose state',
    'Choose city': 'Choose city',
    'Sunday': 'Sunday',
    'Monday': 'Monday',
    'Tuesday': 'Tuesday',
    'Wednesday': 'Wednesday',
    'Thursday': 'Thursday',
    'Friday': 'Friday',
    'Saturday': 'Saturday',
    'Nome:': 'Name:',
    'Email:': 'Email:',
    'Github:': 'Github:',
    'Projeto:': 'Project:',
    'Linkedin:': 'Linkedin:',
    'Objetivo': 'Objective',
    'Tecnologia': 'Technology',
    'Para consultar os dados previsão do tempo foi utilizada um API que retorna um json(javascript object notation) com os dados da previsão. API utilizada foi': 'To query the weather forecast data we used an API that returns a json (javascript object notation) with the forecast data. API used was',
    'Objetivo deste protótipo é realizar consulta da previsão do tempo com base na cidade e estado desejada pelo usuário. A página exibirá além da temperatura máxima e mínima do dia atual a previsão dos próximos 7 dias da semana. Onde a mesa será dividia em 8 box. Inciando pelo Box de consulta de Estado e Cidade, onde inicialmente o usuário selecionará o estado para selecionar posteriormente a cidade desejada. E por último o Box do gráfico de variação de temperatura da semana, exibirá um gráfico linear com máximas e mínimas dos dias exibidos.' : 'Purpose of this prototype is to perform weather forecast consultation based on the city and state desired by the user. The page will display beyond the maximum and minimum temperature of the current day the forecast of the next 7 days of the week. Where the table would be divided into 8 boxes. Inciando by the State and City query box, where initially the user will select the state to select the desired city later. And finally the Box of the temperature variation chart of the week, will display a linear graph with maximum and minimum of the days displayed'
  });

  $translateProvider.translations('pt', {
    'Home': 'Home',
    'About': 'Sobre',
    'Contact': 'Contatos',
    'Search': 'Pesquisar',
    'City': 'Cidade',
    'State': 'Estado',
    'Temperature': 'Temperatura',
    'Select state and city to see the weather.': 'Selecione estado e cidade para ver o tempo.',
    'Week temperature chart': 'Gráfico da temperatura',
    'Week Temperature': 'Temperatura da semana',
    'Choose state': 'Escolha estado',
    'Choose city': 'Escolha cidade',
    'Sunday': 'Domingo',
    'Monday': 'Segunda',
    'Tuesday': 'Terça',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sábado',
    'Nome:': 'Nome:',
    'Email:': 'Email:',
    'Github:': 'Github:',
    'Projeto:': 'Projeto:',
    'Linkedin:': 'Linkedin:',
    'Objetivo': 'Objetivo',
    'Tecnologia': 'Tecnologia',
    'Para consultar os dados previsão do tempo foi utilizada um API que retorna um json(javascript object notation) com os dados da previsão. API utilizada foi': 'Para consultar os dados previsão do tempo foi utilizada um API que retorna um json(javascript object notation) com os dados da previsão. API utilizada foi',
    'Objetivo deste protótipo é realizar consulta da previsão do tempo com base na cidade e estado desejada pelo usuário. A página exibirá além da temperatura máxima e mínima do dia atual a previsão dos próximos 7 dias da semana. Onde a mesa será dividia em 8 box. Inciando pelo Box de consulta de Estado e Cidade, onde inicialmente o usuário selecionará o estado para selecionar posteriormente a cidade desejada. E por último o Box do gráfico de variação de temperatura da semana, exibirá um gráfico linear com máximas e mínimas dos dias exibidos' : 'Objetivo deste protótipo é realizar consulta da previsão do tempo com base na cidade e estado desejada pelo usuário. A página exibirá além da temperatura máxima e mínima do dia atual a previsão dos próximos 7 dias da semana. Onde a mesa será dividia em 8 box. Inciando pelo Box de consulta de Estado e Cidade, onde inicialmente o usuário selecionará o estado para selecionar posteriormente a cidade desejada. E por último o Box do gráfico de variação de temperatura da semana, exibirá um gráfico linear com máximas e mínimas dos dias exibidos'
  });

}]);