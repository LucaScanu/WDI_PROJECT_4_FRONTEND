angular
.module('secretChef')
.factory('Category', categoryFactory);

categoryFactory.$inject = ['API', '$resource'];
function categoryFactory(API, $resource) {
  return $resource(`${API}/categories/:id`, { id: '@_id'}, {});
}
