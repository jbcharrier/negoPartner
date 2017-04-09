export class SiteDetailsController {
  constructor ($scope, Account, $stateParams) {
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
    
    if($scope.accountId && $scope.siteId){
      Account.getSite($scope.accountId, $scope.siteId).then(function (data) {
        $scope.site = data;
      })
    }
  }
}
