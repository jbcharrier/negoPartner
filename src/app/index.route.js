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
    })
    .state('accountDetails', {
      url: '/account/:id',
      templateUrl: 'app/account/details/accountDetails.html',
      controller: 'AccountDetailsController',
    })
    .state('accountModify', {
      url: '/account/modify/:id',
      templateUrl: 'app/account/modify/accountModify.html',
      controller: 'AccountModifyController',
      resolve: {
        accountToModify: function (Account, $stateParams) {
          return Account.getAccount($stateParams.id);
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
