angular.module('app')
    .directive('navigation', [function() {
        
        'use strict';
        
        var templatePath;
        
        templatePath    = 'templates/reusable/navigation/';
        /* ---------------------------------------------------- */
        return {
            restrict: 'E',
            templateUrl: templatePath + 'index.html'
        };
    }]);