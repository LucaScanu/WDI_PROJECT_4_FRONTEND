angular
.module('secretChef')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', '$state', 'CurrentUserService'];
function RegisterCtrl(User, $state, CurrentUserService) {
  const vm = this;
  vm.register = () => {
    User.register(vm.user).$promise
    .then(data => {
      if (data.user){
        CurrentUserService.getUser()
      }
      // if(data.user.role !== 'guest') {
      //   $state.go('usersShow', { id: data.user.id });
      // } else {
      //   $state.go('eventsIndex');
      // }
    },err => {
      console.log(err);
    });
  };
}
