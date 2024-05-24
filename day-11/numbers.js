// const myName="purva";
// const word="va";
// console.log(myName.includes(word));
// Q. Find how many elements includes word.
// const data = [1, 2, 3, "4", "cat", "dog", "ca", "aca"];
// const FindWord = "ca";
// function Find(array, word) {
//   for (var i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//       if (array[i].includes(word)) {
//         console.log(array[i]);
//       }
//     }
//   }
// }
// Find(data, FindWord);
// Q . Print numbers from 10-1 using while loop.
// let num = 10;
// while (num > 0) {
//   console.log(num);
//   num--;
// }
// Binary Search
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 8;
function BinarySearch(array, target) {
    const middleIndex = Math.floor(array.length / 2);
    console.log(middleIndex);
    if (target == array[middleIndex]) {
        console.log(middleIndex);
    }
}
BinarySearch(numbers, target);
