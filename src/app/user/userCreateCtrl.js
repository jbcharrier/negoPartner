export class UserCreateController {
  constructor($scope, $stateParams, $state, Account, Users){
    'ngInject';
    
    $scope.accountId = $stateParams.accountId;
    $scope.user = {};
    
    Account.getAccount($scope.accountId).then(function (data) {
      $scope.sites = data.sites;
    });
    
    $scope.resetUser = function () {
      $scope.user = {};
    };
    
    $scope.saveUser = function (user) {
      user.accountId = $scope.accountId;
      Users.saveUser(user).then(function () {
        Users.saveUserGlobally(user);
      });
      $scope.resetUser();
      $state.go('accountDetails', {id: $scope.accountId});
    }
  }
}
