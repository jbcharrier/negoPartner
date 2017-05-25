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
      if(userToUpdate.siteSelected === 'allSites') {
        userToUpdate.siteSelected = [];
        for (let id in $scope.sites){
          userToUpdate.siteSelected.push(id)
        }
      }
      if(!angular.isDefined(userToUpdate.siteSelected)){
        $mdToast.show(
          $mdToast.simple()
            .textContent("Veuillez sélectionner un site pour cet utilisateur")
            .position('bottom right')
            .hideDelay(7000)
        );
        return;
      }
      Users.update(accountId, userId, userToUpdate);
      $state.go('accountDetails', {id: accountId});
    };
  }
}
