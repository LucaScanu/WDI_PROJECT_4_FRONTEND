angular
.module('secretChef')
.controller('EventsNewCtrl', EventsNewCtrl);

EventsNewCtrl.$inject = ['Event', '$state'];
function EventsNewCtrl(Event, $state) {
  const vm  = this;
  vm.submit = (newEvent) => {
    Event.save({ event: newEvent }).$promise
    .then(data => {
      $state.go('eventsIndex')
    }, err => {
      console.log(err);
    })
  }
}
