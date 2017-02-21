angular
.module('secretChef')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User'];
function RegisterCtrl(User) {
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
