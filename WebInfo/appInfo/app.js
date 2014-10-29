'use strict';
var app = angular.module('appInfo', ['ui.router', 'appInfo.controllers']).
    config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/test");
        $stateProvider
            .state("test", {
                url: "/test",
                templateUrl: "test/",
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

    }]);

var appInfoControllers = angular.module('appInfo.controllers', []);