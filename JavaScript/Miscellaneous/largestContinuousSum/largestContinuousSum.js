function largestContinuousSum(arr){
  var currentSum = arr[0]
  var highestSum = arr[0]
  arr.forEach(function(el){
    currentSum += el
    if(currentSum > highestSum){
      highestSum = currentSum
    }
    if(currentSum < 0){
      currentSum = 0
    }
  })
  return highestSum
}

console.log(largestContinuousSum([1,2,3,4,5]))
