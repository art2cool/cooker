'use strict';

module.exports = ['$scope', '$http', function($scope, $http) {

  console.log('hello from help controller');
    var successCallback = function(data) {
      console.log(data.data);
      var data = data.data;
      $scope.faq = data;
    }
    var errorCallback = function (error) {
      console.log(error);
    }
  $http.get('http://localhost:3000/users/help').then(successCallback, errorCallback);
}];
