'use strict';

/**
 * @ngdoc function
 * @name barbacarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the barbacarsApp
 */
angular.module('barbacarsApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.todos = [];

  	$scope.addTodo = function() {
  		$scope.todos.push($scope.todo);
  		$scope.todo = '';
  	};

  	$scope.removeTodo = function(index) {
  		$scope.todos.splice(index, 1);
  	};
  });
