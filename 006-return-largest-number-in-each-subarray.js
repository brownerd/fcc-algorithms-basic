function largestOfFour(arr) {
  
  // .map() over each subarray
  // .reduce() to return the largest number in each subarray
  return arr.map(function (item) {
    return item.reduce(function (a, b) {
      return a > b ? a : b;
    }, 0);
  });
 
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// [5, 27, 39, 1001]