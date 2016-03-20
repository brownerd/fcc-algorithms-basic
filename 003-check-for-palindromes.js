// If the string is a Palendrome return true, else return false

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

function palindrome(str) {

	// Remove punctuation, spaces and symbols and lowerCase the string
  var sanitizedString = str.replace(/[\W,_]/gi, '').toLowerCase();
  // Split the string into an array, reverse the array, and join it back into a string
  var reversedString = sanitizedString.split('').reverse().join('');
  // Test if the two variables are the same 
  if (sanitizedString === reversedString) {
    return true;
  } else {
    return false;
  }
}

// UGH! what a pain! But I learnd a ton.

palindrome("eye");
