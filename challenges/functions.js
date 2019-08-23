// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
// Whenever a new function is created in JavaScript, a closure is created. Closure gives access to an outer function's scope from an inner function. When a function is invoked it looks for the variable in its own local scope, however when it does not find the variable defined in its own local scope it moves one level outwards. It keeps on moving outwards till it finds the variable it is looking for. The outer variable does not have access to the inner variable.
// When myFunction is invoked, it immediately looks for a variable called eternal. When the function is not able to find external within itself it reaches out to the global scope and finds external defined there. Thereafter, it moves to line 51 and then line 53. When it reaches line 56 and nested function is called, it enters line 54 but does not find internal defined and looks for it in its outer scope which is the function myFunction where it is defined.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
