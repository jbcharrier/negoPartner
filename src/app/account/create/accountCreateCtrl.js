export class AccountCreateController {
  constructor($scope, Account){
    'ngInject';
    
    $scope.account = Account.get();
    
    $scope.reset = function () {
      Account.reset();
    };
    
    $scope.saveAccount = function () {
      Account.save($scope.account);
      $scope.reset();
    }
  }
}
