Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: 'Master Ember.js',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Extend Ember.js',
   isCompleted: false
 }
];