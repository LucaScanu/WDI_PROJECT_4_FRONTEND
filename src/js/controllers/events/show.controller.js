angular
.module('secretChef')
.controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['Event', '$stateParams', 'Request'];
function EventsShowCtrl(Event, $stateParams, Request) {
  const vm  = this;
  vm.event = Event.get($stateParams);

  vm.request = (eventToRequest) => {
    const request = {
      request: {
        event_id: eventToRequest.id
      }
    };
    Request.save(request).$promise
    .then(data => {
      // Refresh the event... could improve
      vm.event = Event.get($stateParams);
    }, err => {
      console.log(err);
    });
  };
}
