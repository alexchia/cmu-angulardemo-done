angular.module('cmuApp', [])
  .controller('CMUController', ['$scope', '$http', function($scope, $http) {
    $scope.cmuText = "Carnegie Mellon University";

    $http.get('/api/getinfo/helloworld').
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.text1 = data.id;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
}]);