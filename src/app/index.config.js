export function config ($logProvider, toastrConfig) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
  
  var config = {
    apiKey: "AIzaSyDg41Sa3TqN0eZaUhb1GS7_McmACo8up1c",
    authDomain: "negopartner-a1282.firebaseapp.com",
    databaseURL: "https://negopartner-a1282.firebaseio.com",
    storageBucket: "negopartner-a1282.appspot.com",
    messagingSenderId: "1095092287889"
  };
  firebase.initializeApp(config);
  
}
