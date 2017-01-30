export class AccountDetailsController {
  constructor ($scope, Account, $stateParams) {
    'ngInject';
    
    var accountId = $stateParams.id;
    
    if(accountId){
      Account.getAccount(accountId).then(function (account) {
        console.log("account", account);
        $scope.account = account;
      })
    }
    
  }
}
