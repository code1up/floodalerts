module.exports = function (app) {
    "use strict";

    describe("helloWorld", function () {
        beforeEach(window.module(app.name));
        
        it("should test", function () {
            expect(true).to.equal(true); 
        });
    });    
};    
