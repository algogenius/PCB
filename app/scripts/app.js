'use strict';

angular.module('parimeoCubeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/cubes.html',
                controller: 'CubesController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
