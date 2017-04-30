export class AccountCreateController {
  constructor($scope, $state, Account){
    'ngInject';
    
    $scope.account = Account.get();
    
    $scope.reset = function () {
      Account.reset();
    };
    
    $scope.saveAccount = function () {
      $scope.account.creationDate = Date.now();
      Account.save($scope.account);
      $scope.reset();
      $state.go('home');
    }
  }
}
