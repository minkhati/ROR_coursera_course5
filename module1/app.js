(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.displayMessage = function () {
    $scope.message = "";
    if ($scope.menu){
      //$scope.message =  "{{$scope.menu}} Something";
      var items = $scope.menu.split(',');
      if (items.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }
    else {
      $scope.message = "Please enter data first";
    }
  };
}

})();
