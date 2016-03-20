// Factorialize a Number

// Factorial using For loop
function factorializeFor(num) {

  var product = 1;
  for (var i = num; i > 0; i--) {
    product *= i;
  }
  return product;
}


// Factorial using While loop
function factorializeWhile(num) {

  var product = num;
  while (num-- > 1) {
    product *= num;
  }
  return product;
}


// Factorial using self
function factorializeSelf(num) {

  if (num === 0) {
    return 1;
  } else {
    return num * factorializeSelf(num - 1);
  }
}

console.log(factorializeFor(5));
console.log(factorializeWhile(5));
console.log(factorializeSelf(5));