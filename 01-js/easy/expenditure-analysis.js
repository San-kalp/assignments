/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and returns a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each Transaction is an object like 
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // HashMap to store total spent for each category
  let hashMap = {};

  // Iterate through each transaction
  for (let transaction of transactions) {
    // Check if the category already exists in the hashMap
    if (hashMap[transaction.category] > 0) {
      // If yes, add the price to the existing total
      hashMap[transaction.category] += transaction.price;
    } else {
      // If no, initialize the total spent for the category
      hashMap[transaction.category] = transaction.price;
    }
  }

  // Convert the hashMap to an array of objects
  let resultArray = Object.keys(hashMap).map(category => {
    return {
      category: category,
      totalSpent: hashMap[category]
    };
  });

  return resultArray;
}

module.exports = calculateTotalSpentByCategory;
