(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
  $scope.message = "List items in the text box as per the instructions and click on the button to check if it is too much!";
  $scope.items = "";
//  $scope.itemsArray = $scope.splitItems();

  $scope.checkIfTooMuch = function () {
    if($scope.items != ""){
    var array = $scope.items.split(',');
    if(array.length>3) {
      $scope.message = "Too Much!";
    };
    if(array.length<=3){
      $scope.message = "Enjoy!";
    }
  }
  else {
    $scope.message = "Please enter data first.";
  }
  };
};

})();
