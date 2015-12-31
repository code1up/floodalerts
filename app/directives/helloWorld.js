/* global IS_TESTING */
module.exports = function (app) {
    "use strict";
    
    if (IS_TESTING) {
        require("./helloWorld.test")(app);    
    }
    
    app.directive("helloWorld", function () {
        require("./helloWorld.css");
        
        return {
            restrict: "E",
            replace: true,
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
