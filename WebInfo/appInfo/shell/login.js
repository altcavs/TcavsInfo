angular.module('appInfo.controllers').controller('loginCtrl', ['security', function (security) {

    var vm = this;
    security.redirectAuthenticated('/test');
    var User = function () {
        return {
            username: '',
            password: ''
        }
    };
    vm.login = function () {
        vm.message = "Processing Login...";
        security.login(vm.user).then(function (user) {
            //Success
            toastr.success("Login Successful");
            console.log(user);
            vm.message = null;
            security.redirectAuthenticated('/test');
            //Automatically sends them back to the page they were trying to access or the home page
        }, function (errorData) {
            //Error
        }).catch(function (data) {
            vm.message = null;
        });
    };

}]);