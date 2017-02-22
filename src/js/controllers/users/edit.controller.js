angular
.module('secretChef')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$stateParams', '$state', 'CurrentUserService'];
function UsersEditCtrl(User, $stateParams, $state, CurrentUserService){
  const vm = this;

  vm.user = User.get($stateParams);
  vm.update = userUpdate;

  function userUpdate(){
  User
    .update({ id: $stateParams.id }, vm.user)
    .$promise
    .then(() => {
      $state.go('usersShow', { id: `${$stateParams.id}` });
    });
  }
}
