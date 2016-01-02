/* global IS_TESTING */

(function () {
    "use strict";
    
    var angular = require("angular");

    if (IS_TESTING) {
        require("angular-mocks/angular-mocks");    
    }

    var dependencies = [
        require("angular-material"),
        require("angular-route")
    ];

    var app = angular.module("app", dependencies);

    // App.
    require("./providers")(app);
    require("./services")(app);
    require("./directives")(app);
    require("./controllers")(app);
    
    // Styles.
    require("./css/app.css");
    
    // Third party.
    app.value("moment", require("moment"));

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "templates/floodAlertList.html",
                controller: "FloodAlertListCtrl",
                controllerAs: "floodAlertList",
            })
            .when("/floodalert/:id", {
                templateUrl: "templates/floodAlert.html",
                controller: "FloodAlertCtrl",
                controllerAs: "floodAlert",
        });

        $locationProvider.html5Mode(true);
    });

    app.config(function($mdThemingProvider) {
        $mdThemingProvider
            .theme("default")
            .primaryPalette("blue")
            .accentPalette("red");
    });
}());
