angular
.module('secretChef')
.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$state', 'Category'];
function HomeCtrl($state, Category) {
  const vm = this;
  Category
  .query()
  .$promise
  .then(data => {
    vm.categories = data;
  });
}
