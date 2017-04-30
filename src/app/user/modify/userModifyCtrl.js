export class UserModifyController {
  constructor ($scope, $stateParams, $state, Users) {
    'ngInject';
    
    var accountId = $stateParams.accountId;
    var userId = $stateParams.id;
    
    if (accountId && userId) {
      Users.getUser(accountId, userId).then(function (user) {
        $scope.user = user;
      })
    }
    
    $scope.updateUser = function (userToUpdate) {
      Users.update(accountId, userId, userToUpdate);
      $state.go('accountDetails', {id: accountId});
    };
  }
}
