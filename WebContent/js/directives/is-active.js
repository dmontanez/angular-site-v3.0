angular.module('app')
    .directive('isActive', [function() {
        
        'use strict';
        
        /* ---------------------------------------------------- */
        return {
            restrict: 'A',
            link: function(scope, el, attr) {
                el.click(function() {
                        el.closest('ul').find('li').removeClass('active');
                        el.addClass('active');
                    }
                );
            }
        };
    }]);