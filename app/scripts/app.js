'use strict';

/**
 * @ngdoc overview
 * @name barbacarsApp
 * @description
 * # barbacarsApp
 *
 * Main module of the application.
 */
angular
  .module('barbacarsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
