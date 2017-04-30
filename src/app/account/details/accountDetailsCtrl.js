export class AccountDetailsController {
  constructor ($scope, $stateParams, $state, Account, Users) {
    'ngInject';
  
    if(sessionStorage.getItem("siteId")) {
      sessionStorage.removeItem("siteId")
    }
    
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
    };
    
    $scope.deleteUser = function (userId) {
      Users.delete(accountId, userId).then(function (data) {
        console.log(data);
        $state.reload();
      })
    }
  }
}
