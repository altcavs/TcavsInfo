angular.module('appInfo.controllers').controller('shellCtrl',  ['security',function (Security) {
    Security.authenticate();
    var vm = this;
    vm.test = 'shellCtrl';

}]);