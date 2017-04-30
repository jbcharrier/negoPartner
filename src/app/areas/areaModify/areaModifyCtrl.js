export class AreaModifyController {
  constructor ($scope, $state, $stateParams, AreaType, Account) {
    'ngInject';
    
    $scope.area = {};
    $scope.accountId = sessionStorage.getItem("accountId");
    $scope.siteId = sessionStorage.getItem("siteId");
    $scope.areaId = $stateParams.id;
  
    AreaType.getAreaTypeList().then(function (areaTypeList) {
      $scope.areaTypes = areaTypeList;
    });
    
    if ($scope.accountId && $scope.siteId) {
      Account.getArea($scope.accountId, $scope.siteId, $scope.areaId).then(function (data) {
        $scope.area = data.val();
      })
    }
    
    $scope.modify = function (area) {
      Account.modifyArea($scope.accountId, $scope.siteId, $scope.area.id, area).then(function (data) {
        console.log(data);
        $state.go('areasList');
      })
    };
  }
}
