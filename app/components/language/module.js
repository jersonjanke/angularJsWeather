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
        template: `
        <div class="row">
            <div class="col-lg-12">
                <div class="pull-right">
                    <button class="btn" ng-click="vm.setTranslate('pt')">Portugues</button>
                    <button class="btn" ng-click="vm.setTranslate('en')">English</button>
                </div>
            </div>
        </div>
    `
    });

export default exports;