angular.module('appInfo.controllers').controller('testCtrl', ['security', function (security) {

    var vm = this;
    vm.user = {};
    vm.test = 'Тест из контроллера';
    vm.login = function (user) {
        security.login(user).then(function (user) {
            //Success
            //Automatically sends them back to the page they were trying to access or the home page
        }, function (errorData) {
            //Error
        });
    };
    vm.register = function (user) {
        security.register(user).then(function (user) {
            //Success
            //Automatically sends them back to the page they were trying to access or the home page
        }, function (errorData) {
            //Error
        });
    }

}]);