function anagramStrings(string1, string2){
  var sortedString1 = string1.split("").sort(function(a,b){
    return a > b ? 1: -1 ;
  }).join("")
  var sortedString2 = string2.split("").sort(function(a,b){
    return a > b ? 1: -1 ;
  }).join("")

  return sortedString2 === sortedString1
}

anagramStrings("hello", "olleh")
