angular
  .module('secretChef')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwtHelper) {
  //we bind the function to this. We call it self to remind us
  //it doesn't have any connections with the view
  const self = this;

  self.setToken = (token) => {
    $window.localStorage.setItem('auth-token', token);
  };

  self.getToken = () => {
    return $window.localStorage.getItem('auth-token');
  };

  self.decodeToken = () => {
    const token = self.getToken();
    return token ? jwtHelper.decodeToken(token) : null;
  };
}
