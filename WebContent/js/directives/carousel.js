angular.module('app')
    .directive('carousel', [function() {
        
        'use strict';
        
        var templatePath;
        
        templatePath    = 'templates/reusable/carousel/';
        /* ---------------------------------------------------- */
        return {
            restrict: 'E',
            scope: false,
            templateUrl: templatePath + 'index.html',
        };
    }]);