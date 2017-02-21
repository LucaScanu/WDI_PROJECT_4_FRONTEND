angular
  .module('secretChef')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$rootScope', '$state'];
function LoginCtrl(User, CurrentUserService, $rootScope, $state) {
  const vm = this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      // $rootScope.$broadcast('loggedIn');
      $state.go('usersIndex');
    }, err => {
      console.log(err);
    });
  };
}
