// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.


// https://davidwalsh.name/array-from

// I had to look this one up. 
// http://wulkan.me/bonfire-seek-and-destroy/

// 1. Capture the arguments in a variable called args using Array.from(arguments). This is a trick that I recently learned from https://davidwalsh.name/array-from
// 2. return the result of transforming args[0] using .filter()
// 3. return items from args[0] that are not in the index of the args array

function destroyer(arr) {

  var args = Array.from(arguments);
  //console.log(args);
  return args[0].filter(function(item){ 
    //console.log([item, args.indexOf(item)]);
    return args.indexOf(item) === -1; 
  });


}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
//console.log(destroyer(["tree", "hamburger", 53], "tree", 53));


/*
This still trips me up a bit.

First, I never thought to use indexOf() for the solution.
I kept thinking that I had to curry this function to make it work with an unknown arity.

Second, I kept trying to think of ways to run the .filter() checking to see if the items in the arr[0] were equal to arr[1], arr[2], arr[3] ...

Anyway, I was stumpped on this one



function destroyer(arr) {

  var args = Array.from(arguments);

  return [1, 2, 3, 1, 2, 3].filter(function(item){
    
    return args.indexOf(item) === -1;
    
    // [[1, 2, 3, 1, 2, 3], 2, 3].indexOf(1) is -1, meaning that 1 is not in the index args[0]. 
    // [[1, 2, 3, 1, 2, 3], 2, 3].indexOf(2) is 1, meaning that 2 in first positon n the index of args[0]
  });


}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

*/
