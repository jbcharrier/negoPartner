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
  
  // var config = {
  //   apiKey: "AIzaSyA9gpYbYauEwab83kfyvpXQ5fuSv-AmLLk",
  //   authDomain: "negopartner.firebaseapp.com",
  //   databaseURL: "https://negopartner.firebaseio.com",
  //   storageBucket: "negopartner.appspot.com",
  //   messagingSenderId: "600611749728"
  // };
  // firebase.initializeApp(config);
  
}
