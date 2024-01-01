/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if the lengths of the two strings are different
  if (str1.length != str2.length) {
    return false;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Populate a hashmap with character counts for the first string
  let hashmap = populateHashmap(str1); // Output: { s: 1, p: 1, a: 1, r: 1 }

  // Iterate through each character in the second string
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    // If the character exists in the hashmap, decrement its count
    if (hashmap[char]) {
      hashmap[char] -= 1;
    }
  }

  // Check if all values in the hashmap are zero
  let valueArray = Object.values(hashmap);
  isAllEmpty = valueArray.every(value => value === 0);

  // Return true if all characters in both strings are accounted for, otherwise false
  return isAllEmpty;
}

// Function to populate a hashmap with character counts
function populateHashmap(word) {
  let charcountHashmap = {};

  // Iterate through each character in the word
  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    // If the character exists in the hashmap, increment its count; otherwise, set count to 1
    if (charcountHashmap[char]) {
      charcountHashmap[char]++;
    } else {
      charcountHashmap[char] = 1;
    }
  }

  // Return the populated hashmap
  return charcountHashmap;
}

// Export the isAnagram function for external use
module.exports = isAnagram;
