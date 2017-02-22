angular
  .module('secretChef')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams){
  const vm = this;

  vm.user = User.get($stateParams);
}
