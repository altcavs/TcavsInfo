'use strict';
var app = angular.module('appInfo', ['ui.router', 'appInfo.controllers', 'security'])

    .config(["$stateProvider", "$urlRouterProvider", "securityProvider", function ($stateProvider, $urlRouterProvider, securityProvider) {
        securityProvider.events.login = function (security, user) {
            //alert('Hello ' + user.userName);
        };
        //$urlRouterProvider.otherwise("/test");
        $stateProvider
            .state("home", {
                name: "home",
                url: "/",
                templateUrl: "home/shell",
                controller: "homeCtrl as vm"
            })

            .state("test", {
                url: "test",
                parent: "home",
                templateUrl: "home/test",
                controller:  "testCtrl as vm"
            })

            .state("news", {
                url: "/news",
                templateUrl: "app/partials/news.html",
                controller: "newsCtrl"
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
            });

    }])
    .run(['$rootScope', 'security','$state', function ($rootScope, security, $state) {
        //So you can access security variables and methods anywhere
        $rootScope.security = security;
        $state.transitionTo('test'); 

    }])
;

var appInfoControllers = angular.module('appInfo.controllers', []);