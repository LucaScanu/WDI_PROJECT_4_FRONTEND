angular
  .module('secretChef')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', '$state', 'CurrentUserService'];
function UsersShowCtrl(User, $stateParams, $state, CurrentUserService){
  const vm = this;
  vm.user = User.get($stateParams);
  vm.delete = usersDelete;

  function usersDelete(){
    if(confirm('Are you sure?')){
      User
        .delete({ id: $stateParams.id })
        .$promise
        .then(() => {
          CurrentUserService.removeUser();
        });
      }
    }
  }
