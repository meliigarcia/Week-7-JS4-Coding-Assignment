// This is an array called ages 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// This subtracts the first element from last element on the ages array.
let lastIndex = ages.length - 1;
let ageDifference = ages[lastIndex] - ages[0];
console.log("Age difference:", ageDifference);

// This adds a new age to the ages array and repeat the subtraction equation 
// (lastIndex)to ensure it is dynamic.
ages.push(25); // Adds the new age of 25 to ages array
lastIndex = ages.length - 1; // Recalculate lastIndex equation
ageDifference = ages[lastIndex] - ages[0];
console.log("Updated age difference:", ageDifference);

// This calculates the average age using a loop.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);

// This creates another array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// This calculates the average number of letters per name.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name:", averageLetters);

// This makes the array names concatenate all names together separated by spaces
let allNames = '';
for (let i = 0; i < names.length; i++) {
  allNames += names[i] + ' ';
}
console.log("All names together:", allNames.trim());

// Allows me to access the last element of the ages array, 
// but can also be use to call on other arrays just change the array name you want to call on.
let lastElement = ages[ages.length - 1];
console.log("Last element of ages array:", lastElement);

// Allows me to access the first  element of the ages array, 
// but can also be use to call on other arrays just change the array name you want to call on.
let firstElement = ages[0];
console.log("First element of ages array:", firstElement);

// This creates a new array called nameLengths and calculate the lengths of each name in the names array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

// This calculates sum of all the letters in the names array
let sumOfLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumOfLengths += nameLengths[i];
}
console.log("Sum of name lengths:", sumOfLengths);

// Created a function to repeat(concatenate) a word n (number) of times
function concatenateWord(word, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
console.log("Concatenated word:", concatenateWord('Hello', 3));

// Created a function that returns full name (first name then last name in that order)
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log("Full name:", getFullName('John', 'Smith'));

// Created a function to check if sum of numbers in the array are greater than 100
function isSumGreaterThan100(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}
console.log("Sum greater than 100:", isSumGreaterThan100([25, 30, 60]));

// Created a function to calculate the average of numbers in the array
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log("Average:", calculateAverage([10, 20, 30, 40]));

// Created a function to compare averages of two different arrays
function compareAverage(arr1, arr2) {
  let avg1 = calculateAverage(arr1);
  let avg2 = calculateAverage(arr2);
  return avg1 > avg2;
}
console.log("First array's average greater than second array's average:", compareAverage([10, 20, 30], [5, 15, 25]));

// Created a function to determine if "we'd" buy drink based on the weather and money
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}
console.log("Will buy drink:", willBuyDrink(true, 15));

// Created a function that capitalizes Names
// The purpose being to capitalizes the first letter of each name in the array of names.

function capitalizeNames(names) {
  let capitalizedNames = [];
  for (let i = 0; i < names.length; i++) {
    capitalizedNames.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase());
  }
  return capitalizedNames;
}
console.log("Capitalized names:", capitalizeNames(['john', 'mary', 'anna']));
