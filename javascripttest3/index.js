//You are given an array of objects representing products in a store. Each object has three
//properties: name, category, and price. Write a function called filterAndTransformProducts that
//filters the products by a given category and then returns an array of strings where each string is
//the product's name and price concatenated.


//const products = [
//{ name: "Laptop", category: "Electronics", price: 1000 },
//{ name: "Shirt", category: "Clothing", price: 50 },
//{ name: "Phone", category: "Electronics", price: 500 },
//{ name: "Shoes", category: "Clothing", price: 80 }
//];

//function filterAndTransformProducts(products, category) {
    
  //  const filteredProducts = products.filter(product => product.category === category);
//    const transformedProducts = filteredProducts.map(product => `${product.name} - $${product.price}`);
    
    //return transformedProducts;
  //}
  //console.log(filterAndTransformProducts(products, "Electronics"));
  




//You are given an array of objects representing inventory items. Each object has a name,
//quantity, and price. Write a function called inventoryValue that returns the total value of the
//inventory, but only includes items where the quantity is greater than zero.


//const inventory = [
//{ name: "Laptop", quantity: 5, price: 1000 },
//{ name: "Shirt", quantity: 0, price: 50 },
//{ name: "Phone", quantity: 10, price: 500 },
//{ name: "Shoes", quantity: 3, price: 80 }
//];

//function inventoryValue(inventory) {
  //  return inventory.reduce((sum, item) => {
    //  if (item.quantity > 0) {
      //sum= sum + item.quantity*item.price
      //}
      //return sum;
    //}, 0); 
    //return total;
  //}
  //console.log(inventoryValue(inventory));

  //You are given an array of objects representing orders in a restaurant. Each object has three
//properties: orderId, tableNumber, and amount. Write a function called sumByTable that returns
//an object where each key is a tableNumber and the value is the total amount for that table.


//const orders = [
//{ orderId: 1, tableNumber: 2, amount: 30 },
//{ orderId: 2, tableNumber: 1, amount: 20 },
//{ orderId: 3, tableNumber: 2, amount: 50 },
//{ orderId: 4, tableNumber: 3, amount: 40 },
//{ orderId: 5, tableNumber: 1, amount: 10 }
//];
//function sumByTable(orders){
    //function sumByTable(orders) {
        //return orders((amount, order) => {
          //if ([order.tableNumber]) {
            // [order.tableNumber] += order.amount;
          // } else {
          //  [order.tableNumber] = order.amount;
        //  }
      //    return orders;
    //    }, {});
  //    }

//}
//console.log(sumByTable(orders));






//pracs----------

// Question 3: Nested Objects and Property Counting
// You are given an array of objects representing students. Each object has a name property and a
// subjects property, which is an array of strings representing the subjects the student is enrolled
// in. Write a function called countSubjects that returns an object where each key is a subject and
// the value is the number of students enrolled in that subject.


//const students = [
  //{ name: "Alice", subjects: ["Math", "Science"] },
  //{ name: "Bob", subjects: ["English", "Math"] },
  //{ name: "Charlie", subjects: ["Math", "History"] },
  //{ name: "David", subjects: ["Science", "History"] }
  //];
  //function countSubs(students) {
  //let subCounts = {};
  
  //for (let student of students) {
  //    for (let subject of student.subjects) {
  //        if (subCounts[eachsubject]) {
  //            subCounts[eachsubject]++;
  //        } else {
  //            subCounts[subs] = 1;
  //        }
  //    }
  //}
  
  //return subCounts;
  //}
  //console.log(countSubs(students));

function topSpenders(transactions) {
  const userTotals = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.userId]) {
      acc[transaction.userId] = { totalAmount: 0, transactionCount: 0 };
    }
    acc[transaction.userId].totalAmount += transaction.amount;
    acc[transaction.userId].transactionCount += 1;
    return acc;
  }, {});
  const filteredUsers = Object.entries(userTotals)
    .filter(([userId, data]) => data.transactionCount > 1)
    .map(([userId, data]) => ({ userId: parseInt(userId), totalAmount: data.totalAmount }));
  filteredUsers.sort((a, b) => b.totalAmount - a.totalAmount);
  return filteredUsers.map(user => user.userId);
}
console.log(topSpenders(transactions));




  
