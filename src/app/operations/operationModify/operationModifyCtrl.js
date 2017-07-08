export class OperationModifyController {
  constructor ($scope, $state, $stateParams, Account, OperationFrequency, moment) {
    'ngInject';
    
    if(sessionStorage.getItem("accountId") && sessionStorage.getItem("siteId") && sessionStorage.getItem("areaId")) {
      $scope.accountId = sessionStorage.getItem("accountId");
      $scope.siteId = sessionStorage.getItem("siteId");
      $scope.areaId = sessionStorage.getItem("areaId");
    } else {
      $state.go('home');
    }
    if(sessionStorage.getItem("operationId")){
      $scope.operationId = $stateParams.operationId;
    } else {
      $scope.operationId = $stateParams.operationId;
      sessionStorage.setItem("operationId", $scope.operationId);
    }
    
    $scope.frequencies = OperationFrequency.getFrequencyList();
    
    Account.getOperation($scope.accountId, $scope.siteId, $scope.areaId, $scope.operationId).then(function (operation) {
      $scope.operation = operation;
    });
    
    $scope.modifyOperation = function (operationModified) {
      $scope.operation.creationDate = Date.now();
      $scope.operation.startDate = moment(operationModified.startDate).format('DD/MM/YYYY');
      $scope.operation.endDate = moment(operationModified.endDate).format('DD/MM/YYYY');
      $scope.operation.result = 0;
      Account.modifyOperation($scope.accountId, $scope.siteId, $scope.areaId, $scope.operationId, operationModified);
      $state.go('operationsList');
    }
  }
}
