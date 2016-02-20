angular.module('app')
    .directive('header', [function() {
        
        'use strict';
        
        var templatePath;
        
        templatePath    = 'templates/reusable/page-header/';
        /* ---------------------------------------------------- */
        return {
            restrict: 'E',
            templateUrl: templatePath + 'index.html'
        };
    }]);