angular
.module('secretChef')
.controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['API', '$stateParams', 'User', '$state'];
function UsersEditCtrl(API, User, $stateParams, $state){
  const vm = this;

  vm.user = {};
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
