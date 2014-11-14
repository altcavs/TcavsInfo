angular.module('appInfo.controllers').controller('newsCtrl', ['security', function (Security) {

    var vm = this;
    Security.authenticate();
 
}]);