angular
.module('secretChef')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService'];
function RegisterCtrl(User, CurrentUserService) {
  const vm = this;
  vm.register = () => {
    User.register(vm.user).$promise
    .then(data => {
      CurrentUserService.getUser();
    },err => {
      console.log(err);
    });
  };
}
