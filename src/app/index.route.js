export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      })
    .state('home', {
      url: '/home',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if (Auth.checkPermission()){
            console.log("Auth Permission OK Auth")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('accountCreate', {
      url: '/account',
      templateUrl: 'app/account/create/accountCreate.html',
      controller: 'AccountCreateController',
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('accountDetails', {
      url: '/account/:id',
      templateUrl: 'app/account/details/accountDetails.html',
      controller: 'AccountDetailsController',
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('accountModify', {
      url: '/account/modify/:id',
      templateUrl: 'app/account/modify/accountModify.html',
      controller: 'AccountModifyController',
      resolve: {
        accountToModify: function (Account, $stateParams) {
          return Account.getAccount($stateParams.id);
        },
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('siteCreate', {
      url: '/site/:accountId',
      templateUrl: 'app/site/create/siteCreate.html',
      controller: 'SiteCreateController',
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('siteDetails', {
      url: '/site/:id/details',
      templateUrl: 'app/site/details/siteDetails.html',
      controller: 'SiteDetailsController',
      params:{
        accountId: null
      },
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('siteModify', {
      url: '/site/:id/modify',
      templateUrl: 'app/site/modify/siteModify.html',
      controller: 'SiteModifyController',
      params:{
        accountId: null
      },
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('areasList', {
      url: '/areas',
      templateUrl: 'app/areas/areasList.html',
      controller: 'AreasListController',
      params:{
        accountId: null,
        siteId: null
      },
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('areaCreate', {
      url: '/areas/create',
      templateUrl: 'app/areas/areaCreate/areaCreate.html',
      controller: 'AreaCreateController',
      params:{
        accountId: null,
        siteId: null
      },
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
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
      },
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
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
      },
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('areaType', {
      url: '/area-type',
      templateUrl: 'app/areaType/areaType.html',
      controller: 'AreaTypeController',
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    })
    .state('userCreate', {
      url: '/user/:accountId',
      templateUrl: 'app/user/userCreate.html',
      controller: 'UserCreateController',
      resolve: {
        "check": function(Auth, $state){
          if(sessionStorage.getItem('access')){
            console.log("Auth Permission OK session")
          } else if(Auth.checkPermission()){
            console.log("Auth Permission OK")
          } else {
            $state.path('login');
          }
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
