angular.module('appInfo.controllers').controller('testCtrl', ['security', '$http', function (security, $http) {

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
    vm.schema = [
		{ label: 'Email Address', property: 'username', type: 'email', attr: { required: true } },
		{ property: 'password', type: 'password', attr: { required: true } },
		{ property: 'confirmPassword', label: 'Confirm Password', type: 'password', attr: { confirmPassword: 'user.password', required: true } }
    ];
    vm.test = 'Тест из контроллера';
    vm.login = function () {
        vm.message = "Processing Login...";
        security.login(vm.user).then(function (user) {
            //Success
            console.log(user);
            vm.message = null;
            //Automatically sends them back to the page they were trying to access or the home page
        }, function (errorData) {
            //Error
        }).catch(function (data) {
            vm.message = null;
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
    };
    vm.info = function () {
        $http.get('api/Account/UserInfo').then(function (results) {
            return results;
        });
    };
    vm.logout = function () {
        $http.post('api/Account/Logout').then(function (results) {
            return results;
        });
    };
    vm.test = function () {
        $http.get('api/values').then(function (results) {
            return results;
        });
    }
}]);