export class UserDetailsController {
  constructor ($scope, $stateParams, Account, Users) {
    'ngInject';
    
    if(sessionStorage.getItem("accountId") && sessionStorage.getItem("userId")) {
      $scope.accountId = sessionStorage.getItem("accountId");
      $scope.userId = sessionStorage.getItem("userId");
    } else {
      $scope.accountId = $stateParams.accountId;
      sessionStorage.setItem('accountId', $scope.accountId);
      $scope.userId = $stateParams.id;
      sessionStorage.setItem('userId', $scope.userId);
    }
    
    if($scope.accountId && $scope.userId){
      Users.getUser($scope.accountId, $scope.userId).then(function (data) {
        console.log("data", data);
        $scope.user = data;
      })
    }
  }
}
