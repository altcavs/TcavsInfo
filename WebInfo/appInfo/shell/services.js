
var appInfoServices = angular.module('appInfo.services', ['ngResource']);

appInfoServices.factory('newsData', ['$http', function ($http) {

    var config = {
        params: {
            'rows': 5,
            'title': '{lorem|10}',
            'content': '{lorem|100}',
            'createdTime': '{date|10-10-2014,10-12-2014}',
            'callback': "JSON_CALLBACK"
        }
    }

    return $http.jsonp("http://www.filltext.com", config, {});
}]);

appInfoServices.factory('menuData', ['$resource', function ($resource) {
    return $resource('/api/menu');
}]);

appInfoServices.factory('articlesData', ['$resource', function ($resource) {
    return $resource('data/articles.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
}]);