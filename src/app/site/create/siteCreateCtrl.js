export class SiteCreateController {
  constructor($scope, Account, $stateParams, $state){
    'ngInject';
    
    $scope.accountId = $stateParams.accountId;
    $scope.site = {};
    
    $scope.resetSite = function () {
      $scope.site = {};
    };
    
    $scope.saveSite = function () {
      Account.saveSite($scope.accountId, $scope.site);
      $scope.resetSite();
      $state.go('accountDetails', {id: $scope.accountId});
    }
  }
}
