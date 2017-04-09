export class AccountDetailsController {
  constructor ($scope, $stateParams, Account, Users) {
    'ngInject';
  
    var accountId = $stateParams.id;
  
    if (accountId) {
      Account.getAccount(accountId).then(function (account) {
        $scope.account = account;
      })
    }
    
    if(accountId) {
      Users.getUserList(accountId).then(function (users) {
        $scope.users = users;
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
