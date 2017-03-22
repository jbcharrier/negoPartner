export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    })
    .state('accountCreate', {
    url: '/account',
    templateUrl: 'app/account/create/accountCreate.html',
    controller: 'AccountCreateController'
    })
    .state('accountDetails', {
      url: '/account/:id',
      templateUrl: 'app/account/details/accountDetails.html',
      controller: 'AccountDetailsController'
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
      controller: 'SiteCreateController'
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
    })
    .state('areasList', {
      url: '/areas',
      templateUrl: 'app/areas/areasList.html',
      controller: 'AreasListController',
      params:{
        accountId: null,
        siteId: null
      }
    })
    .state('areaCreate', {
      url: '/areas/create',
      templateUrl: 'app/areas/areaCreate/areaCreate.html',
      controller: 'AreaCreateController',
      params:{
        accountId: null,
        siteId: null
      }
    })
    .state('operationsList', {
      url: '/operations',
      templateUrl: 'app/operations/operationsList.html',
      controller: 'OperationsListController',
      params:{
        accountId: null,
        siteId: null,
        areaId: null
      }
    })
    .state('operationCreate', {
      url: '/operation',
      templateUrl: 'app/operations/operationCreate/operationCreate.html',
      controller: 'OperationCreateController',
      params:{
        accountId: null,
        siteId: null,
        areaId: null
      }
    })
    .state('areaType', {
      url: '/area-type',
      templateUrl: 'app/areaType/areaType.html',
      controller: 'AreaTypeController'
    })
    .state('userCreate', {
      url: '/user/:accountId',
      templateUrl: 'app/user/userCreate.html',
      controller: 'UserCreateController'
    });

  $urlRouterProvider.otherwise('/');
}
