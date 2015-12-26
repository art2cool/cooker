'use strict';

var app = angular.module('MyApp');

app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('register', {
            url: "/register",
            templateUrl: "templates/register.html"
        })
}]);

