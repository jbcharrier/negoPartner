export class AreaModifyController {
  constructor ($scope, $state, $stateParams, Account, AuditFrequency) {
    'ngInject';
    
    $scope.area = {};
    $scope.accountId = sessionStorage.getItem("accountId");
    $scope.siteId = sessionStorage.getItem("siteId");
    $scope.areaId = $stateParams.id;
  
    $scope.auditFrequencies = AuditFrequency.getFrequencyList();
    
    if ($scope.accountId && $scope.siteId) {
      Account.getArea($scope.accountId, $scope.siteId, $scope.areaId).then(function (data) {
        $scope.area = data.val();
        $scope.auditStartDate = new Date($scope.area.auditStartDate);
      })
    }
  
    $scope.modify = function (area, auditStartDate) {
      area.auditStartDate = auditStartDate.getTime();
      Account.modifyArea($scope.accountId, $scope.siteId, $scope.area.id, area).then(function () {
        $state.go('areasList');
      })
    };
  }
}
