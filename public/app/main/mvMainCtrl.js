angular.module('myApp').controller('mvMainCtrl', function($scope, $http){
  $scope.myVar = "Hello Angular";
   $http.get('/api/bruce').success(function(data) {
    $scope.geodata = data;
    

  });
});


