'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}


function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}


myApp.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);
myApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams', PhoneDetailCtrl]);