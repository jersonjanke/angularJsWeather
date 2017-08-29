import angular from 'angular';

const exports = { name: 'card-weather' };

angular.module(exports.name, [])
    .component('cardWeather', {
        bindings: {
            data: '='
        },
        controller: function ($filter) {
            var vm = this;

            vm.getNameWeek = getNameWeek;
            vm.getConvertDate = getConvertDate;
            vm.getImage = getImage;

            function getNameWeek(date) {
                return $filter('translate')(moment.unix(date).format('dddd'));
            }

            function getConvertDate(date) {
                return moment.unix(date).format('DD/MM/YYYY');
            }

            function getImage(icon) {
                return `http://openweathermap.org/img/w/${icon}.png`
              }
        },
        controllerAs: 'vm',
        template: require('./card.html')
    });

export default exports;