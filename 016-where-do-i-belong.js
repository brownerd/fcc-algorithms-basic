// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function where(arr, num) {

//   var sortLowToHigh = arr.sort(function (a, b) {
//     return a > b;
//   });
  
//   var position = sortLowToHigh.filter(function (item) {
//     return num <= item;
//   });
  
//   console.log(position);
//   return sortLowToHigh.indexOf(Number(position[0]));
  
  return arr.concat(num).sort(function (a,b) {
    return a > b;
  }).indexOf(num);
   
}

console.log(where([40, 60, 10], 50)); // 2
console.log(where([10, 20, 30, 40, 50], 35));  // 3
console.log(where([10, 20, 30, 40, 50], 30)); // 2
console.log(where([5, 3, 20, 3], 5));  // 2
console.log(where([2, 5, 10], 15)); // 3


/*
So, I refactored this. 
After figuring this out, I thought about .push()ing the num argument into the arr argument. 
However, that returned a length instead of an array.

So, I used .concat instead.
Then I .sort()ed. Now all the numbers where in the correct position.
Finally, I used .indexOf(num) to simply indicate where the num should be indexed.
 */