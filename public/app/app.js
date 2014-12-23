angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false//https://docs.angularjs.org/error/$location/nobase
});
  $routeProvider
    .when('/', {templateUrl:'/partials/main', controller:'mainCtrl'});
});

angular.module('myApp').controller('mainCtrl', function($scope){
  console.log('abc');
  $scope.myVar = "Hello Angular";
});