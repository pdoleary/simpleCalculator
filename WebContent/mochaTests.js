var mocha = require('mocha');

const calculator = require('./calculator');


describe("Test Add Function", function(){
    it('Add two positive integers', function(){
        expect(calculator.add("2+2")).to.equal(4);
    });

});

describe("Test Sub Function", function(){
    it('Sub two positive integers', function(){
        expect(calculator.add("12-4")).to.equal(8);
    });
});

describe("Test Multiply Function", function(){
    it('Multiply two positive integers', function(){
        expect(calculator.add("6*6")).to.equal(36);
    });
});

describe("Test Divide Function", function(){
    it('Divide two positive integers', function(){
        expect(calculator.add("12/2")).to.equal(6);
    });
});

describe("Test Calculate Function", function(){
    it('Call calculate function with positive integers', function(){
        expect(calculator.add("(3+3)*(2+2)")).to.equal(36);
    });
});