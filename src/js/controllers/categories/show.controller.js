angular
.module('secretChef')
.controller('CategoriesShowCtrl', CategoriesShowCtrl);

CategoriesShowCtrl.$inject = ['Category', '$stateParams', 'Request', 'NgMap', '$state'];
function CategoriesShowCtrl(Category, $stateParams, Request, NgMap, $state) {
  const vm  = this;
  vm.showMap = false;
  Category
  .get($stateParams)
  .$promise
  .then(data => {
    vm.category = data;

    if (vm.category.events.length){
      // setTimeout(() => {
        vm.showMap = true;
        NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
      // }, 100);
    });

    }

    vm.goToEvent = (clickevent, event) => {
      $state.go("eventsShow", {id: event.id});
    };

  });
}
