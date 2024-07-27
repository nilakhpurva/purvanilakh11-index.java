//1*. Create an array with the numbers 1 through 10. Write a function to remove all even
//numbers from this array and return the new array.
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Output: [1, 3, 5, 7, 9]

//2. Write a function that takes a string as an argument and returns the number of
//vowels in the string. Ignore case sensitivity.
//Input: "Hello World"
//Output: 3

//3*. Write a for loop that prints the first 10 Fibonacci numbers.
//Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

//4. Write a function that takes a month as an argument (e.g., "January") and returns
//the number of days in that month. Consider leap years for February. Use a switch
//statement.
//Input: "February"
//Output: 28 or 29 (depending on whether it's a leap year)

//5*. Write a function that takes an array of numbers and returns a new array with only
//the prime numbers from the original array.
//Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Output: [2, 3, 5, 7]

//6*.Write a function that takes three numbers and returns the largest of the three
//without using the Math.max() method.
//Input: 3, 5, 1
//Output: 5

//7*. Write a function that takes an array of numbers and returns the product of all the
//numbers in the array.
//Input: [1, 2, 3, 4]
//Output: 24

//8. Write a function that takes a string and an optional character. The function should
//return the number of times the character appears in the string. If the character is
//not provided, count the number of spaces in the string.
//Input: ("Hello World", "o")
//Output: 2
//Input: ("Hello World")
//Output: 1

//9*. Write a function that takes a score (0-100) and returns the corresponding grade (A,
//B, C, D, F) based on standard grading scale. Use a switch statement with a default
//case for invalid scores.
//Input: 85
//Output: B

//10. Write a function that takes an array of strings and returns an object where the
//keys are the strings and the values are the lengths of those strings. The function
//should exclude strings that have a length of 3 or less.
//Input: ["apple", "bat", "car", "dolphin"]
//Output: {"apple": 5, "dolphin": 7}

//ANSWERS-------------

//1.
//function EvenNumber(num) {
   // return num.filter(number => number% 2 !== 0);
//}
//const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const Array2 = EvenNumber(Array1);

//console.log(Array2);

//5.
//function isPrime(number){
    //if (number < 2) {
      //return false;
    //}
  
   // for ( let i = 2; i <= number / 2; i++) {
      //if (number % i === 0) {
        //return false;
      //}
    //}
//}



//9.
//function myGrading(score) {
  //var gscore;

  //switch(true) {
   // case (score <= 100 && score >= 90):
      // gscore = 'A';
        //break;
   // case (score <= 89 && score >= 80):
        //gscore = 'B';
        // break;
   // case (score <= 79 && score >= 70):
        //gscore = 'C';
        // break;
       //case (score <= 69 && score >= 60):
       // gscore = 'D';
        // break;
   // case (score <= 59 && score >= 0):
       // gscore = 'F';
       // break;

    //case (score > 100 && score < 0):
        //gscore = 'Invalid score';
        //break; 

    // case (score <= 2 && score >= 0):
        //gscore += '-';
        //break; 

     // case (score <= 9 && score >= 8):
       // gscore += '+';
        //break; 

    //default:
    //{
    //return 'INVALID SCORE';
//}

  //return gscore;
//}
//var output = myGrading(85);
//console.log(output); 

//3.

 //function printFibonacci(n) {
    // let a = 0;
    //let b = 1; 
    // console.log(a); 
   //for (let i = 1; i < n; i++) {
      // console.log(b); 
      // let next = a + b;
      // a = b; 
      // b = next;
  // }
 //}

 //printFibonacci(10);

 //7.

 //function calculateSum(numbers){
    //let sum = 0;
    //for (let i = 0; i < numbers.length; i++) {
      //sum += numbers[i];
    //}
    //return sum;
  //}

//6. 
//function findLargest(num1, num2, num3) {
  //if (num1 >= num2 && num1 >= num3) {
    //  return num1;
  //} else if (num2 >= num1 && num2 >= num3) {
    //  return num2;
  //} else {
    //  return num3;
  //}
//}
//const largestNumber = findLargest(3, 5, 1);
//console.log("Largest number:", largestNumber);



 










