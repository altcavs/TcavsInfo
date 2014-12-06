'use strict';
var app = angular.module('appInfo', ['ui.router', 'appInfo.controllers', 'appInfo.services', 'security'])

    .config(["$stateProvider", "$urlRouterProvider", "securityProvider", function ($stateProvider, $urlRouterProvider, securityProvider) {
        securityProvider.events.login = function (security, user) {
            //alert('Hello ' + user.userName);
        };
        //$urlRouterProvider.otherwise("/test");
        $stateProvider
            .state("login", {
                name: "login",
                url: "/login",
                templateUrl: "shell/login",
                controller: "loginCtrl as vm"
            })
            .state("shell", {
                name: "shell",
                url: "/",
                templateUrl: "shell/shell",
                controller: "shellCtrl as vm"
            })
            .state("news", {
                url: "news",
                parent: "shell",
                templateUrl: "shell/news",
                controller: "newsCtrl as vm"
            })

            .state("staff", {
                url: "/staff",
                templateUrl: "app/partials/staff.html",
                controller: "staffCtrl"
            })
            .state("salary", {
                url: "/salary",
                templateUrl: "app/partials/salary.html",
                controller: "salaryCtrl"
            })
            .state("users", {
                url: "/users",
                templateUrl: "app/partials/users.html",
                controller: "usersCtrl"
            })
            .state("categories", {
                url: "/categories",
                templateUrl: "app/partials/categories.html",
                controller: "categoriesCtrl"
            })
            .state("docflow", {
                url: "/docflow",
                templateUrl: "app/partials/docflow.html",
                controller: "docflowCtrl"
            })
            .state("test", {
                url: "test",
                parent: "shell",
                templateUrl: "home/test",
                controller: "testCtrl as vm"
            });

    }])
    .run(['$rootScope', 'security','$state', function ($rootScope, security, $state) {
        //So you can access security variables and methods anywhere
        $rootScope.security = security;
        $state.transitionTo('news'); 

    }])
;

var appInfoControllers = angular.module('appInfo.controllers', []);