export class AreasListController {
  constructor ($scope, $state, Account, $stateParams) {
    'ngInject';
  
    if(sessionStorage.getItem("accountId") && sessionStorage.getItem("siteId")) {
      $scope.accountId = sessionStorage.getItem("accountId");
      $scope.siteId = sessionStorage.getItem("siteId");
    } else {
      $scope.accountId = $stateParams.accountId;
      sessionStorage.setItem('accountId', $scope.accountId);
      $scope.siteId = $stateParams.id;
      sessionStorage.setItem('siteId', $scope.siteId);
    }
    
    if ($scope.accountId && $scope.siteId) {
      Account.getAreasList($scope.accountId, $scope.siteId).then(function (areas) {
        $scope.areas = areas;
      })
    }
  
    $scope.deleteArea = (areaId) => {
      Account.deleteArea($scope.accountId, $scope.siteId, areaId).then(() => {
        $state.reload('areasList', {accountId: $scope.accountId, siteId: $scope.siteId});
      })
    }
  }
}
