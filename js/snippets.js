let hour, greeting;
hour = new Date().getHours(); 	// use a Date object

let morning = "Good morning", day = "Good day", evening = "Good evening";

if (hour < 10) {
    greeting = morning;
} else if (hour < 18 ) {
    greeting = day;
} else {
    greeting = evening;
}

console.log("We meet again, mr. Bond!");

// EXERCISE 1
console.log("EXERCISE 1");
let myNumber = 10;
console.log(myNumber);

console.log("EXERCISE 1a + 1b");
/* writes out "Bingo, the number is 10 / true */
if (myNumber === 10) {
    console.log("Bingo, the number is 10");
} else {
    console.log("Aww, the number wasn't 10");
}

console.log("EXERCISE 1c");
/* writes out "Aww, the number wasn't  10 / false */
if (myNumber === 15) {
    console.log("Bingo, the number is 10");
} else {
    console.log("Aww, the number wasn't 10");
}

// EXERCISE 2
console.log("EXERCISE 2");
let apple = true, orange = false;
console.log("apple and orange");
/* just having a little fun
console.log(apple + orange);
console.log(!apple + orange);
console.log(!apple + !orange);
console.log(apple + !orange);
*/

console.log("EXERCISE 2a + 2b");
if (apple === orange) {
    console.log("You cannot compare apples and oranges.");
} else {
    console.log("Hm, it seems apples and oranges are the same, after all.");
}

console.log("EXERCISE 2c");
/* writes out the if statement */
if (apple === !orange) {
    console.log("You cannot compare apples and oranges.");
} else {
    console.log("Hm, it seems apples and oranges are the same, after all.");
}

console.log("EXERCISE 2d");
/* writes out the else statement */
if (!apple === orange) {
    console.log("You cannot compare apples and oranges.");
} else {
    console.log("Hm, it seems apples and oranges are the same, after all.");
}

// EXERCISE 3
console.log("EXERCISE 3");
// writes out the else statement
let text;
let name = prompt("Enter your name:");
/*
if (name != null && name.length > 3) {
    alert("Hello," + " " + name)
} else {
    alert("Awww!");
}
*/

// EXERCISE 4
console.log("EXERCISE 4");
let myAge = 26;

if (myAge >= 100) {
    console.log("Centennial? Impressive...");
} else if (myAge < 100) {
    console.log("How is retirement treating you?");
} else if (myAge < 70) {
    console.log(" You`re getting really old, aren`t you?");
} else if (myAge < 50) {
    console.log("You aren`t exactly young anymore, are you?");
} else if (myAge < 30) {
    console.log("You are still young");
} else if (myAge < 18) {
    console.log("You are juvenile");
} else if (myAge < 0) {
    console.log("That`s not possible");
}
console.log(myAge);

// EXERCISE 5
console.log("EXERCISE 5");
// myAge = prompt("Enter your age:");

if (Number(myAge)) {
    console.log("Valid number entered");
} else {
    console.log("Not a valid number entered");
}
console.log(myAge);

// EXERCISE 6
console.log("EXERCISE 6");
if (myAge % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}
console.log(myAge);

// EXERCISE 7
console.log("EXERCISE 7");

if (name != null && name.length > 3) {
    document.body.innerHTML = ("Hello," + " " + name);
} else {
    document.body.innerHTML = ("Awww!");
}

/////// PROGRAMMING FOUNDATIONS 1.4 /////////
// QUESTION 1
console.log("QUESTION 1");
let i = 0;
let orderHasShipped = true;
let spaceString = " ";

console.log("Initialized");

// QUESTION 2
console.log("QUESTION 2");
let firstName = "Silje", lastName = "Angelvik";
console.log(firstName.concat(spaceString, lastName));

let fullName = firstName + spaceString + lastName;
console.log(fullName);

// QUESTION 3
console.log("QUESTION 3");
console.log(typeof "frog");

let myFrog = ": A red-eyed tree frog";
console.log("The type of frog is" + myFrog);

// QUESTION 4
console.log("QUESTION 4");

if (orderHasShipped === true) {
    console.log("The order shipped");
} else {
    console.log("The order did not ship");
}

////////////////// IMPORTANT UNDERSTANDING
// QUESTION 5
console.log("QUESTION 5");

let myNumbers = [7, 8, 9, 10, 11, 12, 13]
let len;

for (i; len = myNumbers.length, spaceString = "", i < len; i++) {
    console.log(spaceString += myNumbers[i] + "\n");
}
// variable "myNumbers" holds an array with numeric values
// declaring 3 variables "i", "length", and "text"
// length is the length of the array "myNumbers"
// i < length :  iteration is less than the arrays length ..
