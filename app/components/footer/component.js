import angular from 'angular';

const exports = {name: 'footer'};

angular.module(exports.name, [])
.component('footer', {
    controller: function() {
        var vm = this;
    },
    controllerAs: 'vm',
    template: require('./footer.html')
});

export default exports;