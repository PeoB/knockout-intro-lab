define(["dataContexts/todoListContext"], function(todoListContext) {
    return function(model) {
        var self = this;
        model = model || {};
        this.title = ko.observable(model.title || "My new todolist");
        this.todoListId = ko.observable(model.todoListId);
        this.todos = ko.observableArray(); //This needs to be filled with something ;)
        this.save = function () {
            if(self.title())
                todoListContext.put(self.todoListId(),ko.toJS(self));
        };
        
        this.title.subscribe(this.save); //Save the list when title is changed
    };
});