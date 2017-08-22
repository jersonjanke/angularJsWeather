import weatherHtml from '../weather/weather.html';
import weatherCtrl from '../weather/weather.controller';

function routes($stateProvider) {

  $stateProvider
    .state('weather', {
      url: '/weather',
      template: weatherHtml,
      controller: weatherCtrl,
      controllerAs: 'vm'
    })
}

export default routes;
