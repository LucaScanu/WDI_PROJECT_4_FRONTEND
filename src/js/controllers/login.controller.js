angular
  .module('secretChef')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User'];
function LoginCtrl(User) {
  const vm = this;

  vm.login = () => {
    User
    .login(vm.user).$promise
    .then(data => {
      console.log(data);
      // $rootScope.$broadcast('loggedIn');
      // console.log(data);
//taking the token from the data and sending it to setToken which
//will store it into local storage
    }, err => {
      console.log(err);
    });
  };
}
