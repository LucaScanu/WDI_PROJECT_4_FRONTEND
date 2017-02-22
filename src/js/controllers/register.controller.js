angular
.module('secretChef')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state', '$stateParams'];
function RegisterCtrl(User, CurrentUserService, $state, $stateParams) {
  const vm = this;
  vm.register = () => {
    User.register(vm.user).$promise
    .then((user) => {
      console.log(user);
      CurrentUserService.getUser();
      if(vm.user.role !== 'guest') {
        $state.go('usersShow', { id: `${$stateParams.id}` });
      } else {
        $state.go('eventsIndex');
      }
    },err => {
      console.log(err);
    });
  };
}
