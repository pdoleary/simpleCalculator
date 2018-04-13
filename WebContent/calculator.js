var Calculator = function() {
  function calculate(expression) {
    var expression = expression.replace(/\s/g, '');

    // checkCorrectNumberOfBrackets(expression);
    // var bracketsTerm = findBracketTerm(expression, startIndex);

    expression = resolveOperation(expression, '/');
    expression = resolveOperation(expression, '*');
    expression = resolveOperation(expression, '+');
    expression = resolveOperation(expression, '-');
    alert(expression);
    return parseFloat(expression);
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
  // TODO doesn't work with nested brackets
  function findBracketTerm(expression, startIndex) {
    var firstLeftBracket = expression.indexOf('(');
    var firstRightBracket = expression.indexOf(')');
    var result = expression.substring(firstLeftBracket + 1,
            matchingRightBracket);
    return result;
  }

  function checkCorrectNumberOfBrackets(expression) {
    if ((expression.match(/\(/g) || []).length != (expression.match(/)/g) || []).length) { throw "Invalid syntax, unequal number of left and right brackets"; }
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
    calculate: calculate,
    add: add,
    subtract: subtract,
    divide: divide,
    multiple: multiply
  }
};