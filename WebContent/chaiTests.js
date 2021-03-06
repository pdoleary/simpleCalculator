var chai = require('chai');
var mocha = require('mocha');
var assert = chai.assert;

const myModule = require('./calculator');



describe('Chai tests for calculator add function', function(){
    it('Add test two positive integers', function(){
        assert.equal(myModule.Calculator.add("5", "5"), 10);
    });

    it('Add test with two positive floats', function(){
        assert.equal(myModule.Calculator.add("2.5", "3.2"), 5.7);
    });

    it('Add test with two negative integers', function(){
        assert.equal(myModule.Calculator.add("-7", "-13"), -20);
    });

    it('Add test with two negative floats', function(){
        assert.equal(myModule.Calculator.add("-3.3", "-2.8"), -6.1);
    });

    it('Add test with large positive integers', function(){
        assert.equal(myModule.Calculator.add("2343252352456", "5624563574562"), 7967815927018);
    });

    it('Add test with large negative integers', function(){
        assert.equal(myModule.Calculator.add("-3469876224741", "-4472840987234"), -7942717211975);
    });
});

describe('Chai tests for calculator subtract function', function(){
    it('Subtract test two positive integers', function(){
        assert.equal(myModule.Calculator.subtract("14", "5"), 9);
    });

    it('Subtract test with two positive floats', function(){
        assert.equal(myModule.Calculator.subtract("9.6", "4.7"), 4.9);
    });

    it('Subtract test with two negative integers', function(){
        assert.equal(myModule.Calculator.subtract("-23", "-17"), -6);
    });

    it('Subtract test with two negative floats', function(){
        assert.equal(myModule.Calculator.subtract("-3.3", "-2.8"), -0.5);
    });

    it('Subtract test with large positive integers', function(){
        assert.equal(myModule.Calculator.subtract("2343252352456", "5624563574562"), -3281311222106);
    });

    it('Subtract test with large negative integers', function(){
        assert.equal(myModule.Calculator.subtract("-3469876224741", "-4472840987234"), 1002964762493);
    });
});

describe('Chai tests for calculator multiply function', function(){
    it('Multiply test positive integers only', function(){
        assert.equal(myModule.Calculator.divide("7", "7"), 1);
    });
});

describe('Chai tests for calculator divide function', function(){
    it('Divide test positive integers only', function(){
        assert.equal(myModule.Calculator.multiply("10", "5"), 50);
    });
});


describe('Chai tests for calculator "calculate" function', function(){
    it('Calculate test positive integers only', function(){
        assert.equal(myModule.Calculator.calculate("(3+3)*(3+3)"), 36);
    });
});