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

angular.module('negoPartner', ['ngAnimate', 'ngResource', 'ui.router', 'ngMaterial', 'md.data.table'])
  .constant('moment', moment)
  .constant('firebase', firebase)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('User', LoginFactory)
  .service('Account', AccountFactory)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('AccountCreateController', AccountCreateController)
  .controller('AccountDetailsController', AccountDetailsController)
  .controller('AccountModifyController', AccountModifyController)
  .controller('SiteCreateController', SiteCreateController)
  .controller('SiteDetailsController', SiteDetailsController)
  .controller('SiteModifyController', SiteModifyController)
  .directive('navbar', NavbarDirective);
