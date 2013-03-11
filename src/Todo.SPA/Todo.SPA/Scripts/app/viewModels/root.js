define(["dataContexts/todoListContext", "./todoList"], function(todoListContext, todoList) {
    return function() {
        var self = this;
        this.todoLists = ko.observableArray();
        this.addTodoList = function() {
            todoListContext.post(ko.toJS(new todoList())).then(function(list) {
                self.todoLists.unshift(new todoList(list));
            });
        };

        this.deleteTodoList = function(list) {
            self.todoLists.remove(list);
            todoListContext.delete(list.todoListId());
        };

        //Load up the initial data from the server
        todoListContext.get().then(function(list) {
            var lists = list.map(function(t) { return new todoList(t); });
            self.todoLists(lists);
        });
    };
});