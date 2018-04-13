function calculate(expressionWithSpaces) {
  expression = expressionWithSpaces.replace(/\s/g, '');
  checkCorrectNumberOfBrackets(expression);

  bracketsTerm = findBracketTerm(expression, startIndex)
  return 0;
}

function findBracketTerm(expression, startIndex) {
  return '';
}

function checkCorrectNumberOfBrackets(expression) {
  if ((expression.match(/\(/g) || []).length != (expression.match(/)/g) || []).length) { throw "Invalid syntax, unequal number of left and right brackets"; }
}

function add(num1, num2) {
  var result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  var result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  var result = num1 / num2;
  return result;
}