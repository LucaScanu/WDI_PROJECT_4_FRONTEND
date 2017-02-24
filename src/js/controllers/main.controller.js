angular
.module('secretChef')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    if(vm.user.role !== 'guest') {
      $state.go('usersShow', { id: vm.user.id });
    } else {
      $state.go('home');
    }
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
    $state.go('landing');
  };
}
