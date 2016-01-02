'use strict';

var app = angular.module('MyApp');

app.config(['$urlRouterProvider', '$stateProvider', '$httpProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $httpProvider, $locationProvider) {


  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: '/templates/main.html'
  })
  $stateProvider
  .state('personal', {
    url: '/users/personal',
    templateUrl: '/templates/personal.html',
    controller: "MyPersonalController"
  });
  $stateProvider
  .state('help', {
    url: '/users/help',
    templateUrl: '/templates/help.html',
    controller: 'HelpCtrl'
  });
  $httpProvider.interceptors.push('authInterceptor');
  //  $locationProvider.html5Mode(true);

}]);

app.constant('API_URL', 'http://localhost:3000');
