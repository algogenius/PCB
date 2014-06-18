'use strict';

angular.module('parimeoCubeApp')
    .directive("cube", function (FlickrService) {
        return {
            restrict: "E",
            templateUrl: "views/cube.html",
            scope: {
                x: "@initX",
                y: "@initY",
                z: "@initZ",
                tag: "@tag"
            },
            link: function (scope) {
                if (scope.tag) {
                    FlickrService.getPhotosByTag(scope.tag)
                        .then(function (images) {
                            scope.images = images;
                        })
                }
            }
        };
    });