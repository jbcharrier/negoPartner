export class AccountDetailsController {
  constructor ($scope, Account, $stateParams) {
    'ngInject';
  
    var accountId = $stateParams.id;
  
    if (accountId) {
      Account.getAccount(accountId).then(function (account) {
        $scope.account = account;
      })
    }
  
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
