function titleCase(str) {
	// .split() the sentence into an array of strings
	// .map() over each item in the array
	// use .charAt(0) .toUpperCase the first character in the string
	// and use .slice(1) .toLowerCase() every character after the first character in the string
	// concatenate those with the + operator
	// .join(' ') those strings in the array back into a title cased sentence!
  return str.split(' ').map(function (item) {
      return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    }).join(' ');
}

titleCase("I'm a little tea pot");




// I like this approach that I came across today from:
// http://www.sitepoint.com/introduction-functional-javascript/


var capify = function(str) {
	return [str.charAt(0).toUpperCase(), str.substring(1)].join("");
};
var processWords = function(fn, str) {
	return str.split(" ").map(fn).join(" ");
};

//  processWords(capify, "this is a super cool functional way to do title-case!")