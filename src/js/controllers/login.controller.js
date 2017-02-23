angular
  .module('secretChef')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', '$state', 'CurrentUserService'];
function LoginCtrl(User, $state, CurrentUserService) {
  const vm = this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(data => {
      if (data.user){
        CurrentUserService.getUser();
      }
      console.log(data.user);

    }, err => {
      console.log(err);
    });
  };
}
