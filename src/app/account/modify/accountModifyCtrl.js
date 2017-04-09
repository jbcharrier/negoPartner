export class AccountModifyController {
  constructor($scope, $state, Account, accountToModify){
    'ngInject';
    
    $scope.account = accountToModify;
    
    $scope.updateAccount = function () {
      Account.update($scope.account);
      $state.go('home');
    }
  }
}
