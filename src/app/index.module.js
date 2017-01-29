/* global malarkey:false, moment:false, firebase:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { LoginController } from '../app/login/loginCtrl';
import { LoginFactory } from '../app/service/loginFactory';
import { AccountFactory } from '../app/service/accountFactory';
import { AccountCreateController } from '../app/account/create/accountCreateCtrl';

angular.module('negoPartner', ['ngAnimate', 'ngResource', 'ui.router', 'ngMaterial', 'toastr', 'md.data.table'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('firebase', firebase)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('User', LoginFactory)
  .service('Account', AccountFactory)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('AccountCreateController', AccountCreateController)
  .directive('navbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
