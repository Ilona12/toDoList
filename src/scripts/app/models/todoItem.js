define(function () {
    var TodoItem = function (options) {
      options = options || {};
      this.title = options.title || '';
      this.description = options.description || '';
    };
    return TodoItem;
});

