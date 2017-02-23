angular
.module('secretChef')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    console.log('this is running');
    vm.user = CurrentUserService.currentUser;
    if(vm.user.role !== 'guest') {
      $state.go('usersShow', { id: vm.user.id });
    } else {
      $state.go('eventsIndex');
    }
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
    $state.go('home');
  };
}
