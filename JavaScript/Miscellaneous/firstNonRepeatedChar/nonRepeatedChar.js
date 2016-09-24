function firstNonRepeatedChar(string){
    var histogram = {}
    for(var i = 0; i < string.length; i++){
      if(histogram[string[i]]){
        histogram[string[i]] += 1
      } else {
        histogram[string[i]] = 1
      }
    }

    for(var j = 0; j < string.length; j++){
      if(histogram[string[j]] === 1){
        return string[j]
      }
    }
    return "there are no unique chars"
}

console.log(firstNonRepeatedChar("hhello"))
