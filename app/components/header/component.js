import angular from 'angular';

const exports = { name: 'header'};

angular.module(exports.name, [])
.component('navHeader', {
    controller: function() {
        var vm = this;
    },
    controllerAs: 'vm',
    template: require('./header.html')
});

export default exports;