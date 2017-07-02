export class AreaTypeController {
  constructor ($scope, $mdToast, $state, AreaType, OperationType, OperationFrequency) {
    'ngInject';
    
    $scope.operationInputIsVisible = false;
  
    OperationType.getOperationsList().then(function(operationTypes){
      $scope.operationTypes = operationTypes;
    });
    
    $scope.areaType = AreaType.get();
    $scope.operationsAdded = [];
    $scope.frequencies = OperationFrequency.getFrequencyList();
  
  
    $scope.showOperationInput = function () {
      $scope.operationInputIsVisible = true;
    };
    
    $scope.resetArea = function () {
      AreaType.reset();
    };
  
    $scope.resetOperation = function () {
      $scope.operationSelected = {};
    };
    
    $scope.createAreaType = function (newAreaType) {
      AreaType.saveAreaType(newAreaType);
      $state.reload();
      $scope.showSimpleToast();
      $scope.resetArea();
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
