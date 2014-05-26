function add(x,y) {
  return x + y;
}

function subtract(x,y) {
  return x - y;
}

function multiply(x,y) {
  return x * y;
}

function divide(x,y) {
  return x / y;
}

$(document).ready(function() {

  var operators = [];
  var operator;

  $('div[id=num]').each(function() {
    var tmp = $(this).text();
    $(this).click(function() {
      operators.push(parseInt(tmp));
      console.log(operators.toString());
    });
  });

  $('div[id=operator]').each(function() {
    var tmp = $(this).text();
    $(this).click(function() {
      // console.log(tmp);
      operator = tmp;
      console.log(operator)
    });
  });

  $('div#equals').click(function() {
    switch(operator) {
      case '+' :
      var res = add(operators[0], operators[1]);
      console.log(res);
      operators = [];
      operator = '';
      break;

      case '-' :
      var res = subtract(operators[0], operators[1]);
      console.log(res);
      operators = [];
      operator = '';
      break;

      case '*' :
      var res = multiply(operators[0], operators[1]);
      console.log(res)
      operators = [];
      operator = '';
      break;

      case '/' : 
      var res = divide(operators[0], operators[1]);
      console.log(res);
      operators = [];
      operator = '';
      break;
    }
  });
  
  $('div#clear').click(function() {
    operators = [];
    operator = '';
    console.log(operators.toString());
    console.log(operator.toString());
  });













});

