'use strict';

angular.module('parimeoCubeApp')
    .factory('FlickrService', function ($http) {
        var getPhotosByTagFn = function(tag) {
            return $http.get("", {

            }).then(function(response) {
                var array = response.data.photos.photo.map(function(photo){
                    return "http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg"
                        .replace("{farm-id}", photo.farm)
                        .replace("{server-id}", photo.server)
                        .replace("{id}", photo.id)
                        .replace("{secret}", photo.secret);
                });
                return array;
            });
        };

        // public api
        return {
            getPhotosByTag: function(tag) {
                return getPhotosByTagFn(tag);
            }
        }
    });
