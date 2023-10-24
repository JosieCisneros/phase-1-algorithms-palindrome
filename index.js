function isPalindrome(word) {
  const letters = word.split("")
  const backwards = letters.reverse().join("").toString()

  if(backwards === word) {
    return true;
  } else {
    return false
  }
}



/* 
  define a variable (backwards) where the argument (word) is split aprart
  arguement is then reversed and joined back together in a string
  if variable is strongly equal to the argument then return true
  if variable is not strongly equal to argument then return false
*/

/*
  if arguement string is a palindrom return true
  else artgument string is not a palindrom return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true")
  console.log("=>", isPalindrome("mom"))

  console.log("Expecting: false")
  console.log("=>", isPalindrome("father"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
