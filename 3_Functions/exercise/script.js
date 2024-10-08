function calculateSum(a, b) {
  console.log("The sum of the numbers is: ", a + b);
}

calculateSum(5, 10);

function calculator(num1, num2, operation) {
  if (operation === 'add') {
    console.log(num1 + num2);
  } else if (operation === 'subtract') {
    console.log(num1 - num2);
  } else if (operation === 'multiply') {
    console.log(num1 * num2);
  } else if (operation === 'divide') {
    console.log(num1 / num2);
  } else {
    console.log("Must input 2 numbers and operation must be 'add', 'subtract', 'multiply' or 'divide'")
  }
}

calculator(10, 2, 'divide')
