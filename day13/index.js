// Q Give an aray, do addition of numbers by using while loop .

 //var array = [2, 4, 5, 6, 7, 8, 3, 2];
 //ouput : 120


 //var array = [2, 4, 5, 6, 7, 8, 3, 2];
 //var sum = 0; 
 //var i = 0;        
 //while (i <array.length) {
     //sum += array[i];  
     //i++; 
 //}

 //console.log(sum);


// Q Give an aray, find only odd numbers by using while loop .

 //var array = [2, 4, 5, 6, 7, 8, 3, 2];
 //ouput
// 5
// 7
// 3
// solution:

 //var array = [2, 4, 5, 6, 7, 8, 3, 2];
 //var i = 0;            
 //var oddNumbers = [];   

 //while (i < array.length) {
     //if (array[i] % 2 !== 0) {  
         //oddNumbers.push(array[i]);  
     //}
     //i++;  
 //}

 //console.log(oddNumbers);





// Q Give an aray, find count of even numbers by using while loop .

// var array = [2, 4, 5, 6, 7, 8, 3, 2];

// ouput : 5

var sum = [2, 4, 5, 6, 7, 8, 3, 2];
var i = 0;            
var evennumber = 0;   

while (i < sum.length) {
    if (sum[i] % 2 === 0) {
        evennumber++;  
    }
    i++;  
}

console.log(evennumber);