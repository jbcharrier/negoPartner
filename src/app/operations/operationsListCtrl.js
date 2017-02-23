export class OperationsListController {
  constructor ($scope, $state, $stateParams, Account) {
    'ngInject';
    
    $scope.accountId = $stateParams.accountId;
    $scope.siteId = $stateParams.siteId;
    $scope.areaId = $stateParams.areaId;

    if ($scope.accountId && $scope.siteId && $scope.areaId) {
      Account.getOperationsList($scope.accountId, $scope.siteId, $scope.areaId).then(function (operations) {
        $scope.operations = operations;
      })
    }
  }
}
