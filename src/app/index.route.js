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
    })
    .state('siteCreate', {
      url: '/site/:accountId',
      templateUrl: 'app/site/create/siteCreate.html',
      controller: 'SiteCreateController',
    })
    .state('siteDetails', {
      url: '/site/:id/details',
      templateUrl: 'app/site/details/siteDetails.html',
      controller: 'SiteDetailsController',
      params:{
        accountId: null
      }
    })
    .state('siteModify', {
      url: '/site/:id/modify',
      templateUrl: 'app/site/modify/siteModify.html',
      controller: 'SiteModifyController',
      params:{
        accountId: null
      }
    });

  $urlRouterProvider.otherwise('/');
}
