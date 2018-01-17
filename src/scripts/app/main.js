

/*define(function (template) {
  console.log('App did start...');
});*/
define([
  'app/models/todoItem',
  'lib/text!templates/todoItem/listItem.html',
  'lib/mustache.min'
], function (TodoItem, todoItemTemplate, mustache) {
  var todoItems = [
    new TodoItem({
  title: 'First TodoItem',
  description: 'Learn JavaScript'
    }),
  new TodoItem({
  title: 'Second TodoItem',
  description: 'Build awesome apps'
  })
];
  var itemsHTML = todoItems.map(function (item) {
    return mustache.render(todoItemTemplate, item);
  }).join('');
  var itemsContainer = document.querySelector('.todo-items-container');
  itemsContainer.innerHTML = itemsHTML;
});




