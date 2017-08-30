import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import sanitize from 'angular-sanitize';
import toastr from 'angular-toastr';
import select from 'ui-select';
import translate from 'angular-translate';
import cookies from 'angular-cookies'

const exports = {name: 'core'};

angular.module(exports.name, [
    'moment-picker',
    uirouter,  
    sanitize,
    select,  
    animate,
    toastr,
    translate,
    cookies
]);

export default exports;