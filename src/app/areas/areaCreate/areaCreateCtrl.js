export class AreaCreateController {
  constructor ($scope, $stateParams, $state, Account, AreaType,  AuditFrequency) {
    'ngInject';
    
    $scope.accountId = $stateParams.accountId;
    $scope.siteId = $stateParams.siteId;
    $scope.area = {};
    $scope.auditStartDate = new Date();
  
    $scope.auditFrequencies = AuditFrequency.getFrequencyList();
    
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
      
      $scope.area.auditFrequency = $scope.auditFrequency || "Mensuel";
      $scope.area.auditStartDate = $scope.auditStartDate.getTime();
      
      if($scope.area.operations){
        delete $scope.area.operations.$$mdSelectId;
      }
      Account.saveArea($scope.accountId, $scope.siteId, $scope.area);
      $scope.resetArea();
      $state.go('areasList', {accountId: $scope.accountId, siteId: $scope.siteId});
    }
  }
}
