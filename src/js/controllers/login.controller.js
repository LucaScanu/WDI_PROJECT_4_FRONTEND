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
    .then(data => {
      if(data.user.role !== 'guest') {
        $state.go('usersShow', { id: data.user.id });
      } else {
        $state.go('eventsIndex');
      }
    }, err => {
      console.log(err);
    });
  };
}
