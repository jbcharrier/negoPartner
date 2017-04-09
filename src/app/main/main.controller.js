export class MainController {
  constructor ($scope, $state, Account) {
    'ngInject';
  
    if(sessionStorage.getItem("accountId")) {
      sessionStorage.removeItem("accountId")
    }

    Account.getAccountsList().then(function (data) {
      if(data){
        $scope.accounts = data;
      }
    });
    
    $scope.deleteAccount = function (id) {
      Account.delete(id).then(function () {
        $state.reload();
      });
    };
  }
}
