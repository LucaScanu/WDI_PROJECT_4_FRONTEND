angular
.module('secretChef')
.controller('EventsNewCtrl', EventsNewCtrl);

EventsNewCtrl.$inject = ['Event', 'Category', '$state'];
function EventsNewCtrl(Event, Category, $state) {
  const vm  = this;

vm.categories = Category.query();

  vm.submit = (newEvent) => {
    Event.save({ event: newEvent }).$promise
    .then(data => {
      $state.go('eventsIndex')
    }, err => {
      console.log(err);
    })
  }
}
