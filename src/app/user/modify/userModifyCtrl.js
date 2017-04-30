export class UserModifyController {
  constructor ($scope, $stateParams, $state, Users, Account) {
    'ngInject';
    
    var accountId = $stateParams.accountId;
    var userId = $stateParams.id;
    
    if (accountId && userId) {
      Users.getUser(accountId, userId).then(function (user) {
        $scope.user = user;
      });
      Account.getAccount(accountId).then(function (data) {
        $scope.sites = data.sites;
      });
    }
    
    $scope.updateUser = function (userToUpdate) {
      Users.update(accountId, userId, userToUpdate);
      $state.go('accountDetails', {id: accountId});
    };
  }
}
