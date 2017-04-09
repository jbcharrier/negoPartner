export class AreasListController {
  constructor ($scope, $state, Account, $stateParams) {
    'ngInject';
    
    $scope.accountId = $stateParams.accountId;
    $scope.siteId = $stateParams.siteId;
    
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
