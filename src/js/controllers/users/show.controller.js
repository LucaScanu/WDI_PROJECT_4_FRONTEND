// angular
//   .module('secretChef')
//   .controller('UsersShowCtrl', UsersShowCtrl);
//
// UsersShowCtrl.$inject = ['API', '$stateParams', 'User', '$state'];
// function UsersShowCtrl(API, $stateParams, User, $state){
//   const vm = this;
//   vm.user = User.get($stateParams);
//
//   usersShow();
//
//     function usersShow() {
//       return $http
//         .get(`${API}/api/users/${$stateParams.id}`)
//         .then(response => {
//           vm.user = response.data;
//         });
//     }
//
//     vm.delete = function usersDelete(){
//       return $http
//         .delete(`${API}/api/users/${$stateParams.id}`)
//         .then(() => {
//           $state.go('usersShow');
//         });
//     };
//   }
//
//
//   function usersDelete(user){
//     // console.log('you got here');
//     User
//       .delete({ id: user._id })
//       .$promise
//       .then(() => {
//         $state.go('home');
//       });
//   }
// }
