function findMissingElement(arr, arr2){
  var mergedArrays = arr.concat(arr2)
  var sum = 0
  mergedArrays.forEach(function(el){
    sum ^= el
  })
  return sum
}
console.log(findMissingElement([1,2,3,4,5],[1,2,3,4]))
