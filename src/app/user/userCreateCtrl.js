export class UserCreateController {
  constructor($scope, $stateParams, $state, $mdToast, Account, Users){
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
      if(user.siteSelected === 'allSites') {
        user.siteSelected = [];
        for (let id in $scope.sites){
          user.siteSelected.push(id)
        }
      }
      if(!angular.isDefined(user.siteSelected)){
        $mdToast.show(
          $mdToast.simple()
            .textContent("Veuillez sélectionner un site pour cet utilisateur")
            .position('bottom right')
            .hideDelay(7000)
        );
        return;
      }
      user.accountId = $scope.accountId;
      Users.saveUser(user).then(function () {
        Users.saveUserGlobally(user);
      });
      $scope.resetUser();
      $state.go('accountDetails', {id: $scope.accountId});
    }
  }
}
