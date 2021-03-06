'use strict';

angular.module('parimeoCubeApp')
    .factory('FlickrService', function ($http) {
        var getPhotosByTagFn = function (tag) {
            // yahoo id: christophhanf@yahoo.de
            return $http.get("https://api.flickr.com/services/rest/", {
                params: {
                    method: "flickr.photos.search",
                    api_key: "90efff7cd44768e968b1dabba4d2e15b",
                    format: "json",
                    nojsoncallback: 1,
                    per_page: "6",
                    tags: tag,
                    tag_mode: "all"
                }
            }).then(function (response) {
                var array = response.data.photos.photo.map(function (photo) {
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
            getPhotosByTag: function (tag) {
                return getPhotosByTagFn(tag);
            }
        }
    });
