export class AccountFactory {
  constructor(firebase){
    'ngInject';
    
    this.account = {
      name:'',
      address:'',
      addressComplement:'',
      city:'',
      postalCode:'',
      complement:''
    };
    
    this.firebase = firebase;
    
  }
  
  get () {
    return this.account;
  }
  
  reset () {
  }
  
  save(account){
    
    this.firebase.database().ref('account').push(account).then(function (data) {
      data.update({id:data.key});
    });
  }
}
