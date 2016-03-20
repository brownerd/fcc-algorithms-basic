// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  // Use .filter() to test each item in the array
  return arr.filter(function (item) {
  	// if item is not false, then return the item to the array
    if (item !== false) {
      return item;
    }
  });
}

bouncer([7, "ate", "", false, 9]);