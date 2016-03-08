angular.module('app')
    .filter('phone', function() {
        return function(number) {
            number = String(number);
            var area = number.substring(0,3);
            var front = number.substring(3,6);
            var end = number.substring(6,10);
            
            formattedNumber = ('(' + area + ')' + front + '-' + end);
            
            return formattedNumber;
        };
    });