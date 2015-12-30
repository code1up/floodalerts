/* global IS_TESTING */

module.exports = function (app) {
    if (IS_TESTING) {
        require("./helloWorld.test")(app);    
    }
    
    app.directive("helloWorld", function () {
        require("./helloWorld.css");
        
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
    });
};
