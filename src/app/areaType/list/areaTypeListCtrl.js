export class AreaTypeListController {
  constructor ($scope, $state, AreaType) {
    'ngInject';
  
    AreaType.getAreaTypeList().then(function(areaTypes){
      $scope.areaTypes = areaTypes;
    });
    
    $scope.delete = function (areaTypeId) {
      AreaType.deleteAreaType(areaTypeId).then(function (data) {
        console.log(data);
        $state.reload();
      })
    }
  }
}
