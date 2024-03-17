/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Declaration - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  /* Function Expression - Subtract Numbers */
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  /* Arrow Function - Multiply Numbers */
  const multiply = (number1, number2) => number1 * number2;
  
  /* Open Function Use - Divide Numbers */
  function divide(number1, number2) {
    if (number2 === 0) {
      return "Cannot divide by zero!";
    } else {
      return number1 / number2;
    }
  }
  
  /* Add Numbers Function */
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  /* Subtract Numbers Function */
  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  /* Multiply Numbers Function */
  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  
  /* Divide Numbers Function */
  function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  /* Event listener for Add Numbers button */
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  /* Event listener for Subtract Numbers button */
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
  /* Event listener for Multiply Numbers button */
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  
  /* Event listener for Divide Numbers button */
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
  /* Event listener for Get Total Due button */
  document.querySelector('#getTotal').addEventListener('click', getTotalDue);
  
  /* Function to calculate total due */
  function getTotalDue() {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;
    let discount = isMember ? 0.2 : 0; // Apply 20% discount if user is a member
    let totalDue = subtotal * (1 - discount);
    document.querySelector('#total').textContent = `$ ${totalDue.toFixed(2)}`;
  }
  
  /* ARRAY METHODS - Functional Programming */
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
  /* Assign numbersArray to the HTML element with ID of array */
  document.getElementById('array').textContent = numbersArray.join(', ');
  
  /* Use filter() to find odd numbers and assign to the HTML element with ID of odds */
  document.getElementById('odds').textContent = numbersArray.filter(number => number % 2 !== 0).join(', ');
  
  /* Use filter() to find even numbers and assign to the HTML element with ID of evens */
  document.getElementById('evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');
  
  /* Use reduce() to sum the array elements and assign to the HTML element with ID of sumOfArray */
  document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);
  
  /* Use map() to multiply each element by 2 and assign to the HTML element with ID of multiplied */
  document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2).join(', ');
  
  /* Use map() and reduce() to sum the elements after multiplying each by two and assign to the HTML element with ID of sumOfMultiplied */
  document.getElementById('sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);