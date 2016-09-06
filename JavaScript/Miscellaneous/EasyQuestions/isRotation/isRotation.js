// Given two string s1 and s2, write code to check if s2 is a rotation of s1.

function isRotation(s1, s2){
  if(s1.length !== s2.length){
     return false
  }
  for (var i = 0; i < s1.length; i++) {
   var substring = s1.slice(0,i+1)
   var restOf = s1.slice(i+1)
   var newstring = restOf + substring
    if (newstring === s2){
      return true
    }
  }
  return false
}

console.log(isRotation("abc", "cba"))
console.log(isRotation("waterbottle", "erbottlewat"))
