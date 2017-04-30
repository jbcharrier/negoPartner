export class MainController {
  constructor ($scope, $state, Account) {
    'ngInject';

      sessionStorage.removeItem("accountId");
      sessionStorage.removeItem("siteId");
      sessionStorage.removeItem("areaId");
      sessionStorage.removeItem("operationId");

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
