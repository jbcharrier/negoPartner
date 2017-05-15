export class OperationCreateController {
  constructor ($scope, $state, Account, FrequencyService, moment) {
    'ngInject';
  
  
    if(sessionStorage.getItem("accountId") && sessionStorage.getItem("siteId") && sessionStorage.getItem("areaId")) {
      $scope.accountId = sessionStorage.getItem("accountId");
      $scope.siteId = sessionStorage.getItem("siteId");
      $scope.areaId = sessionStorage.getItem("areaId");
    } else {
      $state.go('home');
    }
    
    $scope.operation = {};
  
    $scope.frequencies = FrequencyService.getFrequencyList();
  
    $scope.resetOperation = function () {
      $scope.operation = {};
    };
  
    $scope.createOperation = function (newOperation) {
      $scope.operation.creationDate = Date.now();
      $scope.operation.startDate = moment(newOperation.startDate).format('DD/MM/YYYY');
      $scope.operation.endDate = moment(newOperation.endDate).format('DD/MM/YYYY');
      Account.saveOperation($scope.accountId, $scope.siteId, $scope.areaId, $scope.operation);
      $scope.resetOperation();
      $state.go('operationsList', {accountId: $scope.accountId, siteId: $scope.siteId, areaId: $scope.areaId});
    }
  }
}
