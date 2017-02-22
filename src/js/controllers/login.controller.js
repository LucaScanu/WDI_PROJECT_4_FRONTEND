angular
  .module('secretChef')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$rootScope', '$state', '$stateParams'];
function LoginCtrl(User, CurrentUserService, $rootScope, $state, $stateParams) {
  const vm = this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then((user) => {
      CurrentUserService.getUser();
      if(vm.user.role !== 'guest') {
        $state.go('usersShow', { id: `${$stateParams.id}` });
      } else {
        $state.go('eventsIndex');
      }
    }, err => {
      console.log(err);
    });
  };
}
