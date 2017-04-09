export class SiteDetailsController {
  constructor ($scope, Account, $stateParams) {
    'ngInject';
    
    $scope.accountId = $stateParams.accountId;
    $scope.siteId = $stateParams.id;
    
    
    if($scope.accountId && $scope.siteId){
      Account.getSite($scope.accountId, $scope.siteId).then(function (data) {
        $scope.site = data;
      })
    }
  }
}
