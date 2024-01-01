/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanSentence = str.replace(/[\W_]/g, '').toLowerCase();

  // Compare with its reversed version
  const reversedSentence = cleanSentence.split('').reverse().join('');
  console.log(cleanSentence.split(''))
  
  return cleanSentence === reversedSentence;
}

module.exports = isPalindrome;
