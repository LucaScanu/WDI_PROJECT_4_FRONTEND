angular
.module('secretChef')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['Event'];
function EventsIndexCtrl(Event) {
  const vm  = this;
  Event
    .query().$promise
    .then(data => {
      console.log(data);
      vm.events = data;
    });
}
