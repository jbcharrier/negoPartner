export class OperationsListController {
  constructor ($scope, $stateParams, Account) {
    'ngInject';
  
    if(sessionStorage.getItem("accountId") && sessionStorage.getItem("siteId") && sessionStorage.getItem("areaId")) {
      $scope.accountId = sessionStorage.getItem("accountId");
      $scope.siteId = sessionStorage.getItem("siteId");
      $scope.areaId = sessionStorage.getItem("areaId");
    } else {
      $scope.accountId = $stateParams.accountId;
      $scope.siteId = $stateParams.siteId;
      $scope.areaId = $stateParams.areaId;
      sessionStorage.setItem('accountId', $scope.accountId);
      sessionStorage.setItem('siteId', $scope.siteId);
      sessionStorage.setItem('areaId', $scope.areaId);
    }

    if ($scope.accountId && $scope.siteId && $scope.areaId) {
      Account.getOperationsList($scope.accountId, $scope.siteId, $scope.areaId).then(function (operations) {
        console.log("operations", operations);
        $scope.operations = operations;
      })
    }
  }
}
