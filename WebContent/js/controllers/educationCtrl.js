angular.module('app')
    .controller('educationCtrl',['$scope', function($scope) {
        
        'use strict';
        
        // State data goes here
        $scope.data = schools;
        
    }]);