angular.module('ImgCache', [])

.provider('ImgCache', function() {

    this.setOptions = function(options) {
        angular.extend(ImgCache.options, options);
    }

    this.setOption = function(name, value) {
        ImgCache.options[name] = value;
    }

    this.$get = ['$q', function ($q) {

        var deferred = $q.defer();

        ImgCache.$promise = deferred.promise;

        ImgCache.init(function() {
            deferred.resolve();
        }, function() {
            deferred.reject();
        });

        return ImgCache;
    }];

});