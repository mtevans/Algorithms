function isPalindrome (string) {
  var length = string.length;

  for (var i = 0; i < length/2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }

  return true;
}


// Time complexity: O(n).
// Space complexity: O(1).
