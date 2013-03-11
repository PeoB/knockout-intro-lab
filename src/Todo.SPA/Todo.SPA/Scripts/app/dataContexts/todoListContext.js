define(function () {
    var rootUrl = "/api/todoList/";
    var options = { contentType: "application/json", dataType: 'json' };
    var context = {
        get: function (id) {
            var o = $.extend({ type: 'get' }, options);
            id = id === 0 ? 0 : id || "";
            return $.ajax(rootUrl + id, o);
        },
        post: function (todoList) {
            var o = $.extend({ type: 'post', data: JSON.stringify(todoList) }, options);
            return $.ajax(rootUrl, o);
        },
        put: function (id, todoList) {
            var o = $.extend({ type: 'put', data: JSON.stringify(todoList) }, options);
            return $.ajax(rootUrl + id, o);
        },
        "delete": function (id) {
            var o = $.extend({ type: 'delete' }, options);
            return $.ajax(rootUrl + id, o);
        }
    };

    return context;
});