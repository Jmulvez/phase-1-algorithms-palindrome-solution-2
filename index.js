function isPalindrome(word) {
  // Write your algorithm here
}
for (let i = 0; < word.length /2; i++) {
  const j = word.length - 1 - i
  const startCharacter = word[i]
  const endCharacter = word[j]
  if (startCharacter 1== endCharacter) return false
}
return true;
/* 
  Add your pseudocode here
*/
If the first and last letters of a word match, and the second letter and second to last letter match and so on, then return true for isPalindrome
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

