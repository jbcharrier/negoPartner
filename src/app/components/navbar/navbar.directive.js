export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
    },
    controller: NavbarController,
    controllerAs: 'vm'
  };

  return directive;
}

class NavbarController {
  constructor () {
    'ngInject';

  }
}
