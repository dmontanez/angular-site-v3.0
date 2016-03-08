angular.module('app')
    .directive('brandActive', [function() {
        
        'use strict';
        
        /* ---------------------------------------------------- */
        return {
            restrict: 'A',
            link: function(scope, el, attr) {
                el.click(function() {
                        el.closest('nav').find('#all-navbar-collapse-1 > ul > li').removeClass('active');
                    }
                );
            }
        };
    }]);