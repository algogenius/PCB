'use strict';

angular.module('parimeoCubeApp')
    .directive("cube", function () {
        return {
            restrict: "E",
            templateUrl: "views/cube.html",
            scope: true
        };
    });