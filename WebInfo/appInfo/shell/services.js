
var appInfoServices = angular.module('appInfo.services', ['ngResource']);

appInfoServices.factory('newsData', ['$resource', function ($resource) {
    return $resource('data/news.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
}]);
appInfoServices.factory('menuData', ['$resource', function ($resource) {
    return $resource('/api/menu');
}]);

appInfoServices.factory('articlesData', ['$resource', function ($resource) {
    return $resource('data/articles.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
}]);