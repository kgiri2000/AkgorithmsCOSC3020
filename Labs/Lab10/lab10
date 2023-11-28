//Kamal Giri
//COSC 3020
//Lab10
//Help: async library (https://caolan.github.io/async/v3/)
//      Lectures
//      Geeksforgeeks
//      

const async = require('async');

function numberofMatches(arr, key, callback) {
  let count = 0;
  
  async.eachSeries(arr, (item, next) => {
    if (item === key) {
      count++;
    }
    next();
  }, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, count);
    }
  });
}


const arr = [1, 2, 3, 4, 1, 2, 1,3,4,1,1,0];
const key = 1;

numberofMatches(arr, key, (err, count) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`The key "${key}" matched ${count} times in the array:`);
  }
});


//Worst Time Complexity:
/*
Since, we are not using parallel processing, the worst time complexity will be O(n) as we 
still need to go through all the elements in the array where n is numbers of elements of the arra
*/