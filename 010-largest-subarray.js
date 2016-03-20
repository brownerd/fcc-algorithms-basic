// Return the Subarray that has the largest Sum of numbers

function largestOfFour(arr) {
  
  // Flatten and sum the 2-D array using .map and .reduce
  var flattenAndSumArray = arr.map(function (item) {
    return item.reduce(function (a, b) {
      return a + b;
    }, 0);
  });
  
  // Reduce the above flattenAndSumArray to get the largest number in the array
  var largestNum = flattenAndSumArray.reduce(function (x, y) {
    return x > y ? x : y;
  });
  
  // Could Have used this instead of the reduce above...
  // var max = Math.max.apply( null, flattenAndSumArray);
  
  // Use .indexOf to get the index of the largest number in the array
  var indexOfLargestArray = flattenAndSumArray.indexOf(largestNum);
  
  // Use indexOfLargestArray variable to return the greatest of the arrays in the original array
  return arr[indexOfLargestArray];
  
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// [1000, 1001, 857, 1]