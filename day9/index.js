//Q. Given an array find vount of numbers who are even.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findCountEvenFromArray(array) {
    var count = 0;
    for(i = 0; i <= array.length - 1; i++){
        console.log(i, array[i]);
        if(array[i] % 2 == 0){
            count++;
        }
    }
    console.log(count, "count");
    return count;
}

const output = findCountEvenFromArray(array);
console.log(output, "output");

// 1. Push -> add element to last index

 var students = ["blair", "serena", "jenny"];
 students.push("blair", "serena");
 students.push("vanessa");
 console.log(students, "constance");

// 2. Pop ->  remove element from last index

 var students = ["isabella", "stella", "jules"];
 students.pop();
 console.log(students, "ava");

// 3. Shift -> remove element from first index

 var students = ["rhys", "alex", "josh"];
 students.shift();
 console.log(students);

//4. Unshift ->  add element to first index

 var students = ["jake", "amy", "charles"];
 students.unshift("rosa");
 console.log(students);

// 5. Slice -> its create updated array based on indexes.

 var students = ["rach", "pheebs", "mon", "chanchan", "bigJ"];
 console.log(students.slice());
 console.log(students.slice(1));
 console.log(students.slice(2, 3));

 console.log(students.slice(-3));
 console.log(students.slice(3, -1));

// 6. Splice

 var students = ["zara", "hm", "mango", "valentino", "coach"];

// .splice(index , 0/1 , new element) -> its return nothing i.e its update current array
// 0 -> update
// 1 -> replace

 students.splice(3, 0, "zara");

 students.splice(1, 2, "zara");

 students.splice(3, 1);

 console.log(students);


// Q Given an array of names find out index of target . 
var students = ["iphone", "oppo", "vivo", "sam", "Gpix"];
var target = "Gpix"
 output  : 4

