console.log("script.js is connected");      // writes: script.js is connected


// EXERCISE 1
let firstName = "Silje", lastName = "Angelvik";
console.log(firstName + " " + lastName);    // writes: Silje Angelvik


// EXERCISE 2
let x = 19, y = 23;
let answer = x + y;
console.log(answer);                        // writes: 42


// EXERCISE 3
/*
  Q1: What result do you expect it to have?
  A1: undefined
  Q2: What result did you expect it to have now?
  A2: rue
  Q3: What is the result of the following, and why?
  A3: false, because you´re writing "!" which = not / in this case false
 */
let myBool = true;
console.log(myBool);                        // writes: true (which is true)
console.log(!myBool);                       // writes: false, which is false (which is true)

myBool = false;
console.log(myBool);                        // writes: false (which is true)
console.log(!myBool);                       // writes: true, which is false (which is true)

// EXERCISE 4
let jam = "Blåbærstyltetøy";
console.log(jam.length);                    // writes: 15


// EXERCISE 5
/*
  Q1: What result do you get?
  A1: a string value of "1923"
  Q2: what do you need to do to get the result to be 42?
  A2: change the variable value from string to number
*/
let a = "19", b = 23;
console.log(a + b);                         // writes: 2319
console.log(parseInt(a) + b);               // writes: 42


// EXERCISE 6
/*
 Q1: Did you get the result you expected?
 A1: My head calculation was 420,
     I did not expect the console result,
     but not shocking my math skills were of
 Q2: How must you place parenthesis in the expression (x + y * z) to get the result 420, instead?
 A2: Shocking my math skills was correct..
*/
let X = 19, Y = 23, Z = 10;
console.log(X + Y * Z);                     // writes 429
console.log((X + Y) * Z);                   // writes 420


// EXERCISE 7
// are all these options valid or are there some more preferred than others?
let remainder = 7 % 3;
console.log(remainder);                     // writes: 1

console.log(7%3);                           // writes: 1
console.log((7%3));                         // writes: 1
