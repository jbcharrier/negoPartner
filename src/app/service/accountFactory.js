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
      creationDate:''
    };
  }
  
  getAccountsList () {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').once('value').then(function (data) {
      var accountList = data.val();
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
      var account = data.val();
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
}
