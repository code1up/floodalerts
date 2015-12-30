module.exports = function (app) {
    describe("helloWorld", function () {
        beforeEach(window.module(app.name));
        
        it("should test", function () {
           expect(false).to.be.false; 
        });
    });    
};
