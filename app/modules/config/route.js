import aboutHtml from '../about/about.html';
import aboutCtrl from '../about/about.controller';
import contactHtml from '../contact/contact.html';
import contactCtrl from '../contact/contact.controller';
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
    .state('about', {
      url: '/about',
      template: aboutHtml,
      controller: aboutCtrl,
      controllerAs: 'vm'
    })
    .state('contact', {
      url: '/contact',
      template: contactHtml,
      controller: contactCtrl,
      controllerAs: 'vm'
    });
}

export default routes;
