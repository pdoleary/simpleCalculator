var chai = require('chai')
var assert = chai.assert;
const calculator = require('');

describle('Chai tests for calculator add function', function(){
    it('Add test two positive integers', function(){
        assert.equal(calculator.add(5, 5), 10);
    });

    it('Add test with two positive floats', function(){
        assert.equal(calculator.add(2.5, 3.2), 5.7);
    });

    it('Add test with two negative integers', function(){
        assert.equal(calculator.add(-7, -13), -20);
    });

    it('Add test with two negative floats', function(){
        assert.equal(calculator.add(-3.3, -2.8), -6.1);
    });

    it('Add test with large positive integers', function(){
        assert.equal(calculator.add(2343252352456, 5624563574562), 7967815927018);
    });

    it('Add test with large negative integers', function(){
        assert.equal(calculator.add(-3469876224741, -4472840987234), -7942717211975);
    });
})

describle('Chai tests for calculator subtract function', function(){
    it('Subtract test two positive integers', function(){
        assert.equal(calculator.subtract(14, 5), 9);
    });

    it('Subtract test with two positive floats', function(){
        assert.equal(calculator.subtract(9.6, 4.7), 4.9);
    });

    it('Subtract test with two negative integers', function(){
        assert.equal(calculator.subtract(-23, -17), -6);
    });

    it('Subtract test with two negative floats', function(){
        assert.equal(calculator.subtract(-3.3, -2.8), -6.1);
    });

    it('Subtract test with large positive integers', function(){
        assert.equal(calculator.subtract(2343252352456, 5624563574562), 0);
    });

    it('Subtract test with large negative integers', function(){
        assert.equal(calculator.subtract(-3469876224741, -4472840987234), 0);
    });
})