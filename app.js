(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
  $scope.message = "List items in the text box as per the instructions and click on the button to check if it is too much!";
  $scope.items = "";
  $scope.customStyle = {};
  $scope.customStyleButton = {};
//  $scope.itemsArray = $scope.splitItems();

  $scope.checkIfTooMuch = function () {
    if($scope.items != ""){
    var array = $scope.items.split(',');
    array = array.filter(function (n) {
      if(n === "" || n === " ")
        return false;
      else
        return true;
    });
    console.log(array);
    if(array.length>3) {
      $scope.message = "Too Much!";
    };
    if(array.length<=3){
      $scope.message = "Enjoy!";
    }
    $scope.customStyle.style = {"color": "green"};
    $scope.customStyleButton.style = {"border": "3px solid green"};
  }
  else {
    $scope.message = "Please enter data first.";
    $scope.customStyle.style = {"color": "red"};
    $scope.customStyleButton.style = {"border": "3px solid red"};
  }
  };
};

})();
