'use strict';

angular.module('parimeoCubeApp')
    .controller('CubesController', function ($scope) {
        $scope.greeting = "Christoph";
        $scope.cubes = [
            { x: 35, y: 35, z: 35 },
            { x: 5, y: 5, z: 0 },
            { x: 10, y: 10, z: 10 }
        ];
    });
