angular
.module('secretChef')
.controller('LandingCtrl', LandingCtrl);

LandingCtrl.$inject = ['$state'];
function LandingCtrl($state) {
  const vm = this;
  return $state.go('landing');
}
