// I need the description here...

function chunk(arr, size) {
	// Create a result variable to push the items into
  var result = [];

  // while the arr has length, continue loop.
  // It will stop when arr.length is 0 since 0 is falsey.
  while(arr.length) {
  	// Gotta read this on from right to left
  	// Splice (cut out) the first item in the arr up to the size argument
  	// Push those spliced items into the result array
  	// Repeat this until arr.length is 0
    result.push(arr.splice(0, size));
  }
  return result;
}

console.log(chunk(["a", "b", "c", "d"], 2));
