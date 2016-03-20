/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

// Necessary links:
// https://en.wikipedia.org/wiki/ROT13
// http://www.ascii.cl/htmlcodes.htm
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


// This was painful, but fun.
// 1. Let's .split() the string into an array of characters
// 2. Let's transform the characters into different charaters using .map()
// 3. If the items.charCodeAt() is between 65 - 77, add 13 to it's charCode and return it
// 4. Let's transform the characters into different charaters using .map()
// 5. If the items.charCodeAt() is between 78 - 90, subtract 13 from it's charCode and return it
// 6. Else, simply return the item
// 7. We now have an array of numbers, and we need to .map() that back into letters
// 8. We check to see if each num is a numer. 
// 9  If so, we use String.fromCharCode(nums) to turn the number into a letter
// 10. If it is not a number, we simply return it.
// 11. No we .join() all of the transformed items in the array back into a string.

function rot13(str) { // LBH QVQ VG!

  return str.split('').map(function (item) {
    
    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 77) {
      
      return (item.charCodeAt() + 13);
      
    } else if (item.charCodeAt() >= 78 && item.charCodeAt() <= 90) {
      
     return (item.charCodeAt() - 13); 
      
    } else {
      
      return item;
      
    }
  }).map(function (nums) {
    
    if (typeof nums === 'number') {
      
      return String.fromCharCode(nums);
      
    } else {
      
      return nums;
    }
    
  }).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
