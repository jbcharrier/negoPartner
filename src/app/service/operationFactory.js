export class OperationTypeFactory {
  constructor($q, firebase){
    'ngInject';
    
    this.firebase = firebase;
    
    this.$q = $q;
    
    this.operationType = {
      id: '',
      name:''
    }
  }
  
  getOperationsList () {
    let defer = this.$q.defer();
    this.firebase.database().ref('operations').once('value').then(function (data) {
      let operationList = data.val();
      defer.resolve(operationList);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  saveOperationType (operation) {
    this.firebase.database().ref('operations').push(operation).then(function (data) {
      data.update({id:data.key});
    });
  }
  
}
