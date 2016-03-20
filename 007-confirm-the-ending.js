// Check if a string ends with the given target string.

// end::(string, string) -> Boolean
function end(str, target) {
  // use .slice(-target.length) to capture the last character(s) of the string
  // test if the captured character(s) are equal to the target argument
  return str.slice(-target.length) === target ? true : false;
}

console.log(end("Bastian", "n")); //true
console.log(end("He has to give me a new name", "name")); // true
console.log(end("He has to give me a new name", "me")); //true
console.log(end("He has to give me a new name", "n")); // false
console.log(end("Connor", "n")); // false