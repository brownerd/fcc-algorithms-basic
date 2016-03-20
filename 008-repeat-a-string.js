
function repeat(str, num) {
  // set a condition to end recursive loop, and to catch numbers less than 1
  if (num < 1) {
    return "";
  } else {
  	// Use recursion to build the string
  	// Reduce the num argument by 1 on each recursive cycle
    return str += repeat(str, num - 1);
  }

}

console.log(repeat("abc", 3));