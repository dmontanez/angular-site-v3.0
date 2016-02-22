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
                    carouselPart;

                    home            = 'templates/states/home/';
                    education       = 'templates/states/education/';
                    experience      = 'templates/states/experience/';
                    skills          = 'templates/states/skills/';
                    projects        = 'templates/states/projects/';
                    other           = 'templates/states/other/';
                    resume          = 'templates/states/resume/';
                    aboutMe         = 'templates/states/about-me/';
                    contact         = 'templates/states/contact/';
                    socialProfiles  = 'templates/states/social-profiles/';
                    carousel        = 'templates/reusable/carousel/';
                    carouselPart    = 'templates/reusable/carousel/partials/'


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
                                templateUrl: education + 'index.html',
                                controller: 'educationCtrl'
                            },
                            'panel-template@education': {
                                templateUrl: carouselPart + 'ed-panel/index.html'
                            }
                        }
                    })
                    .state('experience', {
                        url: '/experience'
                    })
                    .state('skills', {
                        url: '/skills'
                    })
                    .state('projects', {
                        url: '/projects'
                    })
                    .state('other', {
                        url: '/other'
                    })
                    .state('resume', {
                        url: '/resume'
                    })
                    .state('about-me', {
                        url: '/about-me'
                    })
                    .state('contact', {
                        url: '/contact'
                    })
                    .state('social-profiles', {
                        url: '/social-profiles'
                    })
                    .state('carousel', {
                        url: '/carousel',
                        views: {
                            '': {
                                template: '<carousel></carousel>',
                                controller: 'carouselCtrl'
                            }
                        }
                    });
}]);
