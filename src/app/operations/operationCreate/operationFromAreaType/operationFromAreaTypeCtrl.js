export class OperationFromAreaTypeController {
  constructor ($scope, $mdToast, $state, AreaType, Account, moment) {
    'ngInject';
  
      $scope.accountId = sessionStorage.getItem("accountId");
      $scope.siteId = sessionStorage.getItem("siteId");
      $scope.areaId = sessionStorage.getItem("areaId");
    
    AreaType.getAreaTypeList().then(function (areaTypes) {
      $scope.areaTypes = areaTypes;
    });
    
    $scope.addOperationsTypeToArea = function (areaTypeSelected) {
      delete areaTypeSelected.$$mdSelectId;
      angular.forEach(areaTypeSelected, function (operation) {
      operation.creationDate = Date.now();
      operation.startDate = moment(operation.creationDate).format('DD/MM/YYYY');
      operation.endDate = moment(operation.creationDate).format('DD/MM/YYYY');
        Account.saveOperation($scope.accountId, $scope.siteId, $scope.areaId, operation);
      });
      $state.reload();
      $scope.showSimpleToast();
    };
    
    $scope.showSimpleToast = function() {
      $mdToast.show(
        $mdToast.simple()
          .textContent("Opérations ajoutées à l'espace !")
          .position('bottom right')
          .hideDelay(3000)
      );
    };
  }
}
