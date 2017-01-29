export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
    })
    .state('accountCreate', {
    url: '/account',
    templateUrl: 'app/account/create/accountCreate.html',
    controller: 'AccountCreateController',
    });

  $urlRouterProvider.otherwise('/');
}
