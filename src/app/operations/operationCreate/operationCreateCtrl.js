export class OperationCreateController {
  constructor ($scope, $state, $stateParams, Account, FrequencyService, moment) {
    'ngInject';
  
    $scope.accountId = $stateParams.accountId;
    $scope.siteId = $stateParams.siteId;
    $scope.areaId = $stateParams.areaId;
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
