angular
.module('secretChef')
.controller('EventsEditCtrl', EventsEditCtrl);

EventsEditCtrl.$inject = ['Event', '$stateParams', 'Request', '$state'];
function EventsEditCtrl(Event, $stateParams, Request, $state) {
  const vm  = this;
  vm.event = Event.get($stateParams);
  vm.update = eventUpdate;

  function eventUpdate(){
  Event
    .update({ id: $stateParams.id }, vm.event)
    .$promise
    .then(() => {
      $state.go('eventsShow', { id: `${$stateParams.id}` });
    });
  }
}
