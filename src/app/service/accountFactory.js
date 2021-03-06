export class AccountFactory {
  constructor($q, firebase){
    'ngInject';
    
    this.firebase = firebase;
    
    this.$q = $q;
    
    this.account = {
      name:'',
      address:'',
      addressComplement:'',
      city:'',
      postalCode:'',
      complement:'',
      creationDate:'',
      sites: {}
    };
  }
  
  getAccountsList () {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').once('value').then(function (data) {
      let accountList = data.val();
      defer.resolve(accountList);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  get () {
    return this.account;
  }
  
  getAccount (id) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(id).once('value').then(function (data) {
      let account = data.val();
      defer.resolve(account);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  reset () {
  }
  
  save (account) {
    this.firebase.database().ref('account').push(account).then(function (data) {
      data.update({id:data.key});
    });
  }
  
  delete (id) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(id).remove().then(function () {
      defer.resolve('success');
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  update(account) {
    this.firebase.database().ref('account').child(account.id).update(account);
  }
  
  saveSite (accountId, site) {
    this.firebase.database().ref('account').child(accountId).child('sites').push(site).then(function (data) {
      data.update({id:data.key});
    })
  }
  
  deleteSite(accountId, siteId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).remove().then(function () {
      defer.resolve('success');
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  getSiteList(accountId){
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').once('value').then(function (data) {
      let sites = data.val();
      defer.resolve(sites);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  getSite(accountId, siteId){
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).once('value').then(function (data) {
      let site = data.val();
      defer.resolve(site);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  updateSite(accountId, siteId, site) {
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).update(site);
  }
  
  getAreasList (accountId, siteId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').once('value').then(function (data) {
      let areasList = data.val();
      defer.resolve(areasList);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  getArea (accountId, siteId, areaId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').child(areaId).once('value').then(function (data) {
      defer.resolve(data);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  modifyArea (accountId, siteId, areaId, area) {
    if(area.operations){
      delete  area.operations['$$mdSelectId'];
    }
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').child(areaId).update(area).then(function () {
      defer.resolve('area modified with success');
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  saveArea (accountId, siteId, area) {
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').push(area).then(function (data) {
      data.update({id:data.key});
    })
  }
  
  deleteArea (accountId, siteId, areaId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').child(areaId).remove().then(function () {
      defer.resolve('success');
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  getOperationsList (accountId, siteId, areaId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').child(areaId).child('operations').once('value').then(function (data) {
      let operationsList = data.val();
      defer.resolve(operationsList);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  getOperation (accountId, siteId, areaId, operationId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').child(areaId).child('operations').child(operationId).once('value').then(function (data) {
      let operationsList = data.val();
      defer.resolve(operationsList);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  modifyOperation (accountId, siteId, areaId, operationId, operationModified) {
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').child(areaId).child('operations').child(operationId).update(operationModified).then(function (data) {
      data.update({id:data.key});
    })
  }

  saveOperation (accountId, siteId, areaId, operation) {
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').child(areaId).child('operations').push(operation).then(function (data) {
      data.update({id:data.key});
    })
  }
  
  deleteOperation (accountId, siteId, areaId, operationId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('sites').child(siteId).child('areas').child(areaId).child('operations').child(operationId).remove().then(function (data) {
      defer.resolve('operation deleted with success');
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
}
