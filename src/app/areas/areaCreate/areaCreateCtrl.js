export class AreaCreateController {
  constructor ($scope, Account, AreaType, $stateParams, $state) {
    'ngInject';
    
    $scope.accountId = $stateParams.accountId;
    $scope.siteId = $stateParams.siteId;
    $scope.area = {};
    
    AreaType.getAreaTypeList().then(function (areaTypeList) {
      $scope.areaTypes = areaTypeList;
    });
  
    $scope.resetArea = function () {
      $scope.area = {};
    };
  
    $scope.createArea = function () {
      angular.forEach($scope.areaTypes, function(value, key){
        if(key == $scope.areaType){
          if(!$scope.area.name){
            $scope.area.name = value.name;
          }
          $scope.area.operations = value.operations;
        }
      });
      if(!angular.isDefined($scope.area.name) && !$scope.area.operations){
        return;
      }
      if($scope.area.operations){
        delete $scope.area.operations.$$mdSelectId;
      }
      Account.saveArea($scope.accountId, $scope.siteId, $scope.area);
      $scope.resetArea();
      $state.go('areasList', {accountId: $scope.accountId, siteId: $scope.siteId});
    }
  }
}
