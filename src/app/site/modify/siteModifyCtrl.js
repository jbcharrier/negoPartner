export class SiteModifyController {
  constructor ($scope, Account, $stateParams, $state) {
    'ngInject';
    
    var accountId = $stateParams.accountId;
    var siteId = $stateParams.id;
    
    if (accountId) {
      Account.getSite(accountId, siteId).then(function (site) {
        $scope.site = site;
      })
    }
    
    $scope.update = function (siteToUpdate) {
      Account.updateSite(accountId, siteId, siteToUpdate);
        $state.go('siteDetails', {id: siteId, accountId: accountId});
    };
    
    $scope.deleteSite = function (siteId) {
      Account.deleteSite(accountId, siteId).then(function (data) {
        if (data == 'success') {
          Account.getAccount(accountId).then(function (account) {
            $scope.account = account;
          });
        }
      })
    }
  }
}
