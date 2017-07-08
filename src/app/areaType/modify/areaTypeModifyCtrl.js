export class AreaTypeModifyController {
  constructor ($scope, $mdToast, $state, $stateParams, AreaType, OperationType, OperationFrequency) {
    'ngInject';
    
    $scope.areaTypeId = $stateParams.areaTypeId;
    
    $scope.operationInputIsVisible = false;
    
    $scope.areaType = AreaType.getAreaType($scope.areaTypeId).then(function (areaType) {
      $scope.areaType = areaType;
    });
    
    OperationType.getOperationsList().then(function(operationTypes){
      $scope.operationTypes = operationTypes;
    });
    
    $scope.frequencies = OperationFrequency.getFrequencyList();
    $scope.operationsAdded = [];
    
    $scope.showOperationInput = function () {
      $scope.operationInputIsVisible = true;
    };
    
    $scope.resetArea = function () {
      AreaType.reset();
    };
    
    $scope.resetOperation = function () {
      $scope.operationSelected = {};
    };
    
    $scope.modifyAreaType = function (modifiedAreaType) {
      AreaType.modifyAreaType($scope.areaTypeId, modifiedAreaType);
      $state.go('areaTypeList');
    };
    
    $scope.addOperationToArea = function(operationSelected) {
      delete operationSelected.$$mdSelectId;
      $scope.areaType.operations[operationSelected.id] = operationSelected;
    };
    
    $scope.addOperationType = function (operationType) {
      operationType.result = 0;
      operationType.creationDate = Date.now();
      OperationType.saveOperationType(operationType);
      $scope.resetOperation();
      $state.reload();
    };
  
    $scope.deleteOperationType = function (operationToDelete) {
      angular.forEach($scope.areaType.operations, function(value, key){
        if(operationToDelete.id == key){
          delete $scope.areaType.operations[key];
        }
      })
    };
    
    $scope.showSimpleToast = function() {
      $mdToast.show(
        $mdToast.simple()
          .textContent('Nouvel espace créé !')
          .position('bottom right')
          .hideDelay(3000)
      );
    };
  }
}
