// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
	// 1. We can use array functions to return the answer in one go
	// 2. .split() arr[1] to create an array from that string
	// 3. .map() over the items in the array to transform them
	// 4a. return the result of running arr[0].indexOf() for each item in the array
	// 4b. we need to set the item .toLowerCase() to kill case sensitivity
	// 5. if a character is not in arr[0] a -1 will exist in this newly transfromed array
	// 6. we can use .includes(-1) to return true or false if a -1 exists in this array
	// 7. we inverst the result of .includes(-1) to get the correct answer
	// If the .includes(-1) returns true, it means tha the array has a -1 in it. But a -1 indicates that all the charactes in string two are not present in string 1
  return !arr[1].split('').map(function (item) {
      return arr[0].indexOf(item.toLowerCase());
    }).toLowerCase().includes(-1);
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));