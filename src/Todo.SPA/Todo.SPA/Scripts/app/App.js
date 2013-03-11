require(['viewModels/root'], function (rootVM) {
    var app = new rootVM();
    ko.applyBindings(app);
});