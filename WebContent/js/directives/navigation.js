angular.module('app')
    .directive('navigation', [function() {
        
        'use strict';
        
        var templatePath;
        
        templatePath    = 'templates/reusable/navigation/';
        /* ---------------------------------------------------- */
        return {
            restrict: 'E',
            templateUrl: templatePath + 'index.html',
            controller: function () {
                $(document).ready(function() {
                    
                    $(".navbar-nav li a").click(function() {
                        if (!$(this).hasClass("dropdown-toggle")) {
                            $(".navbar-collapse").collapse('hide');
                        }
                    });
                    
                    $(".ext-link").click(function(event) {
                        event.stopImmediatePropagation();
                    });

                    $(".navbar-brand").click(function() {
                        $(".navbar-collapse").collapse('hide');
                    });
                });
            }
        };
    }]);