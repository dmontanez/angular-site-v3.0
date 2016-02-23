angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

                'use strict';


                //Route varibles
                var home,
                    education,
                    experience,
                    skills,
                    projects,
                    other,
                    resume,
                    aboutMe,
                    contact,
                    socialProfiles,
                    carousel,
                    carouselPart,
                    _carouselTemplate;

                    home                = 'templates/states/home/';
                    education           = 'templates/states/education/';
                    experience          = 'templates/states/experience/';
                    skills              = 'templates/states/skills/';
                    projects            = 'templates/states/projects/';
                    other               = 'templates/states/other/';
                    resume              = 'templates/states/resume/';
                    aboutMe             = 'templates/states/about-me/';
                    contact             = 'templates/states/contact/';
                    socialProfiles      = 'templates/states/social-profiles/';
                    carousel            = 'templates/reusable/carousel/';
                    carouselPart        = 'templates/reusable/carousel/partials/';
                    _carouselTemplate   = '<carousel></carousel>';


                //$urlRouterProvider.otherwise('/home');

                $stateProvider
                    .state('home', {
                        url: '/home',
                        views: {
                            '': {
                                templateUrl: home + 'index.html'
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
                                    $scope.data = schools;
                                }
                            },
                            'panel-template@skills': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    })
                    .state('projects', {
                        url: '/projects',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = schools;
                                }
                            },
                            'panel-template@projects': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    })
                    .state('other', {
                        url: '/other',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = schools;
                                }
                            },
                            'panel-template@other': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    })
                    .state('resume', {
                        url: '/resume',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = schools;
                                }
                            },
                            'panel-template@resume': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    })
                    .state('about-me', {
                        url: '/about-me',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = schools;
                                }
                            },
                            'panel-template@about-me': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    })
                    .state('contact', {
                        url: '/contact',
                        views: {
                            '': {
                                template: _carouselTemplate,
                                controller: function($scope) {
                                    $scope.data = schools;
                                }
                            },
                            'panel-template@education': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
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
                                }
                            },
                            'panel-template@social-profiles': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    });
}]);
