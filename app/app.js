/* global IS_TESTING */

var angular = require("angular");

if (IS_TESTING) {
    require("angular-mocks/angular-mocks");    
}

var app = angular.module("app", []);

require("./directives")(app);
