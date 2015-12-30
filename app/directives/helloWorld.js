module.exports = function (app) {
    app.directive("helloWorld", function () {
        return {
            restrict: "E",
            replace: true,
            // TODO: https://egghead.io/lessons/angularjs-angular-with-webpack-requiring-templates
            template: require("./helloWorld.html"),
            scope: {
                name: "@"
            },
            controllerAs: "helloWorld",
            controller: function ($scope) {
                console.log($scope.name);
            }
        };
    })    
};
