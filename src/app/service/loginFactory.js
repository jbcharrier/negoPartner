"use strict";

export class LoginFactory {
  constructor(firebase, $q) {
    'ngInject';
    this.$q = $q;
    this.firebase = firebase;
    this.user = {
      email: "",
      password: ""
    };
  }
  
  getNewUser () {
    return this.user;
  }
  
  signIn (email, password){
    let defer = this.$q.defer();
    this.firebase.auth().signInWithEmailAndPassword(email, password).then(function (data) {
      if(data){
        defer.resolve(data);
      }
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      defer.reject(errorCode, errorMessage);
    });
    return defer.promise;
  }
  
}
