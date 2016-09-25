function deleteDuplicatedLetters(string){
  var array = string.split("")
  var histogram = {}
  for (var i = 0; i < array.length; i++) {
    if(histogram[array[i]]){
      delete array[i]
    } else {
      histogram[array[i]] = true
    }
  }
  return array.join("")
}


deleteDuplicatedLetters("tree traversal")
