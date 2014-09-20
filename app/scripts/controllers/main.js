'use strict';

/**
 * @ngdoc function
 * @name infoturismoProtoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the infoturismoProtoApp
 */
angular.module('infoturismoProtoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.datos = [["a", 4],["b", 3],["c", 2], ["d", 1]];
    $scope.ancho = 600;
    $scope.alto = 200;
  });
