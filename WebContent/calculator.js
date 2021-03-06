CalculatorClass = function() {
  function calculate(expression) {
    return Math.round(calculateRecursive(expression), 2);
  }

  function calculateRecursive(expression) {
    var expression = expression.replace(/\s/g, '');

    checkCorrectNumberOfBrackets(expression);
    expression = resolveBrackets(expression, 0);

    expression = resolveOperation(expression, '/');
    expression = resolveOperation(expression, '*');
    expression = resolveOperation(expression, '+');
    expression = resolveOperation(expression, '-');
    return parseFloat(expression);
  }

  function checkCorrectNumberOfBrackets(expression) {
    if (!expression.includes('(')) { return true }

    if ((expression.match(/\(/g) || []).length != (expression.match(/)/g) || []).length) { throw "Invalid syntax, unequal number of left and right brackets"; }
  }

  function resolveBrackets(expression, startIndex) {
    if (!expression.includes('(')) { return expression; }
    var firstLeftBracket = expression.indexOf('(');
    var firstRightBracket = expression.indexOf(')');
    var expressionBetweenBrackets = expression.substring(firstLeftBracket + 1,
            matchingRightBracket);
    var resultOfBrackets = calculate(expressionBetweenBrackets);
    var expressionAfterCalculation = expression.replace('('
            + expressionBetweenBrackets + ')', result);
    return resolveBrackets(expressionAfterCalculation);
  }

  function resolveOperation(expression, operation) {
    if (!expression.includes(operation)) { return expression; }

    var divideSignIndex = expression.indexOf(operation);
    var firstNum = getNumbersBeforeAndAfterIndex(expression, divideSignIndex).firstNum;
    var secondNum = getNumbersBeforeAndAfterIndex(expression, divideSignIndex).secondNum;
    var result = calculateSingleOperation(firstNum, secondNum, operation);

    var expressionAfterCalculation = expression.replace(firstNum + operation
            + secondNum, result);
    return resolveOperation(expressionAfterCalculation, operation);
  }

  function getNumbersBeforeAndAfterIndex(expression, index) {
    var partsBeforeDivideSign = expression.substring(0, index).split(
            /[-\\+\\*\/]+/);
    var firstNum = partsBeforeDivideSign[partsBeforeDivideSign.length - 1];
    var partsAfterDivideSign = expression.substring(index + 1).split(
            /[-\\+\\*\/]+/);
    var secondNum = partsAfterDivideSign[0];
    return {
      firstNum: firstNum,
      secondNum: secondNum
    }
  }

  function calculateSingleOperation(firstNum, secondNum, operation) {
    switch (operation) {
    case '/':
      return divide(firstNum, secondNum);
      break;
    case '*':
      return multiply(firstNum, secondNum);
      break;
    case '+':
      return add(firstNum, secondNum);
      break;
    case '-':
      return subtract(firstNum, secondNum);
      break;
    default:
      throw 'Undefined operation';
    }
  }

  function add(num1, num2) {
    var result = parseFloat(num1) + parseFloat(num2);
    return result;
  }

  function subtract(num1, num2) {
    var result = parseFloat(num1) - parseFloat(num2);
    return result;
  }

  function multiply(num1, num2) {
    var result = parseFloat(num1) * parseFloat(num2);
    return result;
  }

  function divide(num1, num2) {
    var result = parseFloat(num1) / parseFloat(num2);
    return result;
  }

  return {
    add: add,
    subtract; subtract,
    calculate: calculate,
    multiply: multiply,
    divide: divide
  };
};
// A singleton calculator
Calculator = function() {
  var calculator;
  if (calculator == null) {
    console.log("constructing new instance of MyCalc");
    calculator = new CalculatorClass();
  }
  return calculator;
};

// Export the singleton calculator
module.exports = {
  Calculator: calc = Calculator()
}