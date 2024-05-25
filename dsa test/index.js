//Q.1 write a javascript for loop that iterates from 0 to 10 and prints only the even number//
function printEvenNumbers() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvenNumbers();

//Q.2 write a javascript while loop calculates the factorial of a given number//
var a=5
var i=1
var factorial=1
while(i<=a){
    factorial=factorial*i
    i++
}
console.log(factorial)
//Q.3 Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
//Q.4 Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.//
//Q.5 Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.
 var array4=["aria","hannah","spencer","emily"]

   for (var i = 0; i < array4.length; i++) {
     if (array4[i].length > 5) {
       console.log(array4[i]);
     }
   }
//Q.6 Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.//
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for ( let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(7));  
//Q.7 Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.//
let sum = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
//Q.8 Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.//
function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverseString("purva")); 
console.log(reverseString("nilakh"));
//Q.9 Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase) and numbers.//
//Q.10 Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two numbers in the array.









