export class UserFactory {
  constructor($q, firebase){
    'ngInject';
    
    this.firebase = firebase;
    
    this.$q = $q;
    
    this.user = {
      firstname:'',
      lastname:'',
      position:'',
      siteSelected:'',
      email:'',
      phone:'',
      complement:''
    };
  }
  
  getUserList (id) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(id).child('users').once('value').then(function (data) {
      let userList = data.val();
      defer.resolve(userList);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  get () {
    return this.user;
  }
  
  getUser (accountId, userId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('users').child(userId).once('value').then(function (data) {
      let user = data.val();
      defer.resolve(user);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  reset () {
  }
  
  saveUser (user) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(user.accountId).child('users').push(user).then(function (data) {
      data.update({id:data.key});
      defer.resolve(data.key);
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise
  }
  
  saveUserGlobally (user) {
    let id = (user.email).replace(/\./g, "DOT");
    this.firebase.database().ref('users').child(id).set(user);
  }
  
  
  delete(accountId, userId) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('users').child(userId).remove().then(function () {
      defer.resolve('user deleted with success');
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
  
  update(accountId, userId, userToUpdate) {
    let defer = this.$q.defer();
    this.firebase.database().ref('account').child(accountId).child('users').child(userId).update(userToUpdate).then(function () {
      defer.resolve('user modified with success');
    }, function (error) {
      defer.reject(error);
    });
    return defer.promise;
  }
}
