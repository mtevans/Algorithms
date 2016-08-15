// Implement an algorithm to determine is a string has all unique characters.


function isUnique(string){
  var HashMap = {};
  for (var i = 0; i < string.length; i++) {
    if (HashMap[string[i]]){
      return false
    }
    HashMap[string[i]] = true;
  }
  return true
}


console.log(isUnique("abcde"))


// What if you can't use additional data structures?
//  Would have to either go n2 solution so nested loops or sort the string in alphabetical order.
function isUnique(string){
  var HashMap = {};
  for (var i = 0; i < string.length; i++) {
    if (HashMap[string[i]]){
      return false
    }
    HashMap[string[i]] = true;
  }
  return true
}
