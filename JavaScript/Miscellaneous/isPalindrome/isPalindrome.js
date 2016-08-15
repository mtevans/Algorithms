
// Write a JavaScript function that takes a string and returns true if it's a palindrome,
// false if it's not.


function isPalindrome (string) {
  for (var i = 0; i < string.length; i++) {
    if(string[i] !== string[string.length - 1 - i]){
      return false
    }
  }
  return true
}

// Time complexity: O(n).
// Space complexity: O(1).
