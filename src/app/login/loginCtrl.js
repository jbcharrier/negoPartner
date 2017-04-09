export class LoginController {
  constructor($scope, $state, $log, $mdToast, User, Auth) {
    'ngInject';
    
    $scope.user = User.getNewUser();
  
    $scope.loginUser = function (user) {
      User.signIn(user.email, user.password).then(function (data) {
        if(data.uid){
          Auth.getPermission();
          $state.go('home');
        }
      
      }).catch(function (error) {
        $mdToast.show(
          $mdToast.simple()
            .textContent("Login ou password incorrects")
            .position('bottom right')
            .hideDelay(7000)
        );
        console.log("error", error);
        $log.error(error.message);
      });
    }
  }
}
