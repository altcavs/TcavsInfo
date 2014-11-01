angular.module('appInfo.controllers').controller('testCtrl', ['security', function (security) {

    var vm = this;
    security.redirectAuthenticated('/');
    var User = function () {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };
    vm.user = new User();

    vm.test = 'Тест из контроллера';
    vm.login = function (user) {
        security.login(user).then(function (user) {
            //Success
            //Automatically sends them back to the page they were trying to access or the home page
        }, function (errorData) {
            //Error
        });
    };
    vm.register = function () {
        console.log('***** регистрация');
        security.register(angular.copy(vm.user)).then(function () {
            //Success
            //Automatically sends them back to the page they were trying to access or the home page
        }, function (errorData) {
            //Error
        });
    }

}]);