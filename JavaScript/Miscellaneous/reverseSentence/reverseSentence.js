function reverseSentence(word){
  word = word.split(" ")
  var j = word.length - 1
  for(var i = 0; i < j; i++){
    var hold = word[i]
    word[i] = word[j]
    word[j] = hold
    j -= 1
  }
  return word.join(" ")
}

console.log(reverseSentence("how the hell are you"))
