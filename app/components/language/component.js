import angular from 'angular';

const exports = { name: 'language' };

angular.module(exports.name, [])
    .component('languageButton', {
        controller: function ($translate) {
            var vm = this;
            vm.setTranslate = setTranslate;            

            function setTranslate(lang) {
                $translate.use(lang);                
              }
        },
        controllerAs: 'vm',
        template: require('./index.html')
    });

export default exports;