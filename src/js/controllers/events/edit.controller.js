angular
.module('secretChef')
.controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['Event', '$stateParams', 'Request'];
function EventsShowCtrl(Event, $stateParams, Request) {
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
