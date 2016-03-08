angular.module('app')
    .run(['$rootScope', function($rootScope) {
    
        'use strict';
        
        var root = $rootScope;
        root.user = profile;
}]);