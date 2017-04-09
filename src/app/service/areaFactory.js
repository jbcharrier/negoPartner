export class AreaTypeFactory {
  constructor($q, firebase){
    'ngInject';
    
    this.firebase = firebase;
    
    this.$q = $q;
    
    this.areaType = {
      name:'',
      operations: {}
    }
  }
  
  get () {
    return this.areaType;
  }
  
  getAreaTypeList () {
    let defer = this.$q.defer();
    this.firebase.database().ref('areas').once('value').then(function (data) {
      let areaTypeList = data.val();
      defer.resolve(areaTypeList);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  reset () {
    this.areaType = {
      name:'',
      operations: {}
    };
    this.get();
  }
  
  saveAreaType (areaType) {
    this.firebase.database().ref('areas').push(areaType);
  }
}
