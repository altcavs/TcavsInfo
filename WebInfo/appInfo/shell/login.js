angular.module('appInfo.controllers').controller('loginCtrl', ['security', function (security) {

    var vm = this;
    security.redirectAuthenticated('/news');
    var User = function () {
        return {
            username: '',
            password: ''
        }
    };

    vm.user = new User();

    vm.login = function () {
        vm.message = "Выполняется ВХОД...";
        security.login(vm.user).then(function (user) {
            //Success
            toastr.success("Login Successful");
            console.log(user);
            vm.message = null;
            security.redirectAuthenticated('/news');
            //Automatically sends them back to the page they were trying to access or the home page
        }, function (errorData) {
            //Error
            vm.message = null;
        }).catch(function (data) {
            vm.message = null;
        });
    };

}]);