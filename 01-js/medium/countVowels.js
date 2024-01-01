/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // // Your code here
    // str = str.toLowerCase()
   
    // let hashMap = {
    //   'a':0,'e':0,'i':0,'o':0,'u':0
    // }
    // const vowels = ['a', 'e', 'i', 'o', 'u']

    // for (let char of str){
    //   if (vowels.includes(char)){
    //     hashMap[char]+=1
    //   }
    // }

    // arr=Object.values(hashMap)
    // let sum = arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    // return sum

    str = str.toLowerCase();
    const vowels = new Set(['a','e','i','o','u'])
    let count = 0 
    for (let char of str){
      if(vowels.has(char)){
        count ++
      }

    }
    return count
}

module.exports = countVowels;