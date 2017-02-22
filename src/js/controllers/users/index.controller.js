angular
.module('secretChef')
.controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', 'CurrentUserService'];
function UsersIndexCtrl(User, CurrentUserService){
  const vm = this;
  vm.users = User.query();
}
