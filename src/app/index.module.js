/* global moment:false, firebase:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { LoginController } from '../app/login/loginCtrl';
import { LoginFactory } from '../app/service/loginFactory';
import { AccountFactory } from '../app/service/accountFactory';
import { AccountCreateController } from '../app/account/create/accountCreateCtrl';
import { AccountDetailsController } from '../app/account/details/accountDetailsCtrl';
import { AccountModifyController } from '../app/account/modify/accountModifyCtrl';
import { SiteCreateController } from '../app/site/create/siteCreateCtrl';
import { SiteDetailsController } from '../app/site/details/siteDetailsCtrl';
import { SiteModifyController } from '../app/site/modify/siteModifyCtrl';
import { AreasListController } from '../app/areas/areasListCtrl';
import { AreaCreateController } from '../app/areas/areaCreate/areaCreateCtrl';
import { OperationsListController } from '../app/operations/operationsListCtrl';
import { OperationCreateController } from '../app/operations/operationCreate/operationCreateCtrl';
import { FrequencyService } from '../app/service/frequency/frequency-service';
import { AreaTypeFactory } from '../app/service/areaFactory';
import { AreaTypeController } from '../app/areaType/areaType';
import { OperationTypeFactory } from '../app/service/operationFactory';
import { UserCreateController } from '../app/user/userCreateCtrl';
import { UserFactory } from '../app/service/userFactory';
import { Auth } from '../app/service/auth/auth.service';
import { UserModifyController } from '../app/user/modify/userModifyCtrl';
import { UserDetailsController } from '../app/user/details/userDetailsCtrl';



angular.module('negoPartner', ['ngAnimate', 'ngResource', 'ui.router', 'ngMaterial', 'ngMessages', 'md.data.table'])
  .constant('moment', moment)
  .constant('firebase', firebase)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('User', LoginFactory)
  .service('Account', AccountFactory)
  .service('FrequencyService', FrequencyService)
  .service('AreaType', AreaTypeFactory)
  .service('OperationType', OperationTypeFactory)
  .service('Users', UserFactory)
  .service('Auth', Auth)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('AccountCreateController', AccountCreateController)
  .controller('AccountDetailsController', AccountDetailsController)
  .controller('AccountModifyController', AccountModifyController)
  .controller('SiteCreateController', SiteCreateController)
  .controller('SiteDetailsController', SiteDetailsController)
  .controller('SiteModifyController', SiteModifyController)
  .controller('AreasListController', AreasListController)
  .controller('AreaCreateController', AreaCreateController)
  .controller('OperationsListController', OperationsListController)
  .controller('OperationCreateController', OperationCreateController)
  .controller('AreaTypeController', AreaTypeController)
  .controller('UserCreateController', UserCreateController)
  .controller('UserModifyController', UserModifyController)
  .controller('UserDetailsController', UserDetailsController)
  .directive('navbar', NavbarDirective);
