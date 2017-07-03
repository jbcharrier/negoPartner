export class AuditFactory {
  constructor($q, firebase){
    'ngInject';
    
    this.firebase = firebase;
    this.$q = $q;
    
  }
  
  getAuditList () {
    let defer = this.$q.defer();
    this.firebase.database().ref('audit').once('value').then(function (data) {
      let auditList = data.val();
      defer.resolve(auditList);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
}
