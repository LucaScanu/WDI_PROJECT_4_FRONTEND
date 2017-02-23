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
        vm.showMap = true;
        NgMap.getMap().then(function(map) {
          vm.showCustomMarker= function(evt) {
              map.customMarkers.foo.setVisible(true);
              map.customMarkers.foo.setPosition(this.getPosition());
            };
            vm.closeCustomMarker= function(evt) {
              this.style.display = 'none';
            };
        });
    }

    vm.goToEvent = (clickevent, event) => {
      $state.go("eventsShow", {id: event.id});
    };

  });
}
