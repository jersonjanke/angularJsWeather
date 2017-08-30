import angular from 'angular';

const exports = { name: 'language' };

angular.module(exports.name, [])
    .component('languageButton', {
        controller: function ($translate, $cookies) {
            var vm = this;
            vm.setTranslate = setTranslate;
            
            if($cookies.get('language')) {
                $translate.use($cookies.get('language'));
            }            

            function setTranslate(lang) {
                $translate.use(lang);
                $cookies.put('language', lang);
              }
        },
        controllerAs: 'vm',
        template: require('./index.html')
    });

export default exports;