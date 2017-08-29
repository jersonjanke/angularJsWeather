import angular from 'angular';

const exports = {name: 'card-weather'};

angular.module(exports.name, [])
.component('cardWeather', {
    bindings: {
        data: '='
    },
    controller: function() {
        var vm = this;
        console.log(vm.data);
    },    
    controllerAs: 'vm',
    template: require('./card.html')
});

export default exports;