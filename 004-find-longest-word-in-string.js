// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
  // split the string into an array at the space character
  // Use .reduce to return the length of the longest word
  return str.split(' ').reduce(function(acc, curr) {
    return acc.length > curr.length ? acc : curr;
  }, 0).length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");