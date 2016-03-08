angular.module('app')
    .directive('aboutClick', function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                $(elem).click(function(event) {
                    event.preventDefault();
                    $(".about-pic-modal").attr('ng-src', '');
                    var aboutSrc = $(this).attr('ng-src');
                    var parts = aboutSrc.split('/');
                    aboutSrc = '../images/about-pics/big/' + parts[3];
                    $(".about-pic-modal").attr('src', aboutSrc);
                });
            }
        };
    });