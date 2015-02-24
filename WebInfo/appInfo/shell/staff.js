/// <reference path="news.js" />
angular.module('appInfo.controllers').controller('newsCtrl', ['newsData', function (newsData) {
    //console.log("Из Контроллера новостей");
    var vm = this;
    vm.test = 'newsCtrl';
    vm.news = [];
    newsData.success(function (data) {
        vm.news = data
    });;
   console.log(vm.news);

}]);