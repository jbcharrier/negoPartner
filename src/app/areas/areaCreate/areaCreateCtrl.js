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
      delete $scope.area.operations.$$mdSelectId;
      Account.saveArea($scope.accountId, $scope.siteId, $scope.area);
      $scope.resetArea();
      $state.go('areasList', {accountId: $scope.accountId, siteId: $scope.siteId});
    }
  }
}
