angular
.module('secretChef')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('eventsIndex', {
    url: '/events',
    templateUrl: '/js/views/events/index.html',
    controller: 'EventsIndexCtrl',
    controllerAs: 'eventsIndex'
  })
  .state('eventsNew', {
    url: '/events/new',
    templateUrl: '/js/views/events/new.html',
    controller: 'EventsNewCtrl',
    controllerAs: 'eventsNew'
  })
  .state('eventsShow', {
    url: '/events/:id',
    templateUrl: '/js/views/events/show.html',
    controller: 'EventsShowCtrl',
    controllerAs: 'eventsShow'
  });

  $urlRouterProvider.otherwise('/');
}
