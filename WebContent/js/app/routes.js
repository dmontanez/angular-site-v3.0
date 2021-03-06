angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                'use strict';


                //Route varibles
                var home,
                    resume,
                    aboutMe,
                    contact,
                    socialProfiles,
                    carousel,
                    carouselPart,
                    _carouselTemplate;

                    home                = 'templates/states/home/';
                    resume              = 'templates/states/resume/';
                    contact             = 'templates/states/contact/';
                    socialProfiles      = 'templates/states/social-profiles/';
                    carousel            = 'templates/reusable/carousel/';
                    carouselPart        = 'templates/reusable/carousel/partials/';
                    _carouselTemplate   = '<carousel></carousel>';


                $urlRouterProvider.otherwise('/home');

                $stateProvider
                    .state('home', {
                        url: '/home',
                        views: {
                            '': {
                                templateUrl: home + 'index.html',
                                controller: function($scope) {
                                    $scope.data = profile;
                                    $scope.name = 'home';
                                }
                            }
                        }
                    })
                    .state('education', {
                        url: '/education',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = schools;
                                    $scope.name = 'education';
                                }
                            },
                            'panel-template@education': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    })
                    .state('experience', {
                        url: '/experience',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = companies;
                                    $scope.name = 'experience';
                                }
                            },
                            'panel-template@experience': {
                                templateUrl: carouselPart + 'ex-panel/index.html'
                            }
                        }
                    })
                    .state('skills', {
                        url: '/skills',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = skills;
                                    $scope.name = 'skills';
                                }
                            },
                            'panel-template@skills': {
                                templateUrl: carouselPart + 'sk-panel/index.html'
                            }
                        }
                    })
                    .state('projects', {
                        url: '/projects',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = activities;
                                    $scope.name = 'projects';
                                }
                            },
                            'panel-template@projects': {
                                templateUrl: carouselPart + 'pr-panel/index.html'
                            }
                        }
                    })
                    .state('other', {
                        url: '/other',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = others;
                                    $scope.name = 'other';
                                }
                            },
                            'panel-template@other': {
                                templateUrl: carouselPart + 'ot-panel/index.html'
                            }
                        }
                    })
                    .state('resume', {
                        url: '/resume',
                        views: {
                            '': {
                                templateUrl: resume + 'index.html',
                                controller: function($scope) {
                                    $scope.obj = '../resources/resume.pdf';
                                    $scope.name = 'resume';
                                }
                            }
                        }
                    })
                    .state('about-me', {
                        url: '/about-me',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = aboutTemp;
                                    $scope.name = 'about-me';
                                    $scope.images = aboutImages;
                                    $scope.quotes = aboutQuotes;
                                }
                            },
                            'panel-template@about-me': {
                                templateUrl: carouselPart + 'am-panel/index.html'
                            }
                        }
                    })
                    .state('contact', {
                        url: '/contact',
                        views: {
                            '': {
                                templateUrl: contact + 'index.html',
                                controller: function($scope) {
                                    $scope.data = profile;
                                    $scope.name = 'contact';
                                }
                            }
                        }
                    })
                    .state('social-profiles', {
                        url: '/social-profiles',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = schools;
                                    $scope.name = 'social-profiles';
                                }
                            },
                            'panel-template@social-profiles': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    });
}]);
