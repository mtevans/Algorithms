function pairSum(arr, target){
  var seen = {}
  var pairs = {}
  arr.forEach(function(num){
    var desired = target - num
    if(seen[desired]){
      pairs[([Math.min(num,desired), Math.max(num,desired)])] = true
    }
    seen[num] = true
  })

  return Object.keys(pairs)
}

pairSum([1, 2, -1, -1, -2], 0)
