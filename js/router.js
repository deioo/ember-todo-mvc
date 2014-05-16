Todos.Router.map(function() {
  this.resource('about');
  this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
