'use strict';

/**
 * @ngdoc overview
 * @name infoturismoProtoApp
 * @description
 * # infoturismoProtoApp
 *
 * Main module of the application.
 */
angular
  .module('infoturismoProtoApp', [
    'ngRoute',
    'itChart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
