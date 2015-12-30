module.exports = function (app) {
    app.directive("helloWorld", function () {
        return {
            restrict: "E",
            replace: true,
            template: "<div>{{ helloWorld.greeting }}</div>",
            scope: {},
            controllerAs: "helloWorld",
            controller: function () {
                var that = this;
                
                that.greeting = "Hello from directive controller";
            }
        };
    })    
};
