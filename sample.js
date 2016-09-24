function mergeSort(arr){
  if(arr.length < 2) {
    return arr
  }
  var mid = Math.floor(arr.length / 2)
  var left = mergeSort(arr.slice(0,mid))
  var right = mergeSort(arr.slice(mid))

  return merge(right, left)
}


function merge(arr1, arr2){
  var answer = []
  while((arr1.length !== 0) && (arr2.length !== 0)){
    if(arr1[0] < arr2[0]){
      answer.push(arr1.shift())
    } else {
      answer.push(arr2.shift())
    }
  }
  return answer.concat(arr1, arr2)
}
console.log(mergeSort([2,4,6,2,1]))

function binarySearch(target, arr){
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0,mid);
  var right = arr.slice(mid+1);
  if(target === arr[mid]){
    return mid
  } else if (target < arr[mid]){
    return binarySearch(target, left)
  } else{
    var answer = binarySearch(target, right)
    if(answer === null){
      return null
    } else {
      return answer + mid + 1
    }
  }
}
console.log(binarySearch(9, [1,4,5,6,7,8,9,10]))

function quickSort(arr){
    if(!arr.length){return []}
    var left = []
    var right = []
    var pivot = arr[0]
    for (var i = 1; i < arr.length; i++) {
      if(arr[i] < pivot){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}
console.log(quickSort([1,5,3,1,8,4,32,3]))


function subsets(arr){
  if(arr.length === 0){return [[]]}
  else if (arr.length === 1){return [[], [arr[0]]]}
  var previous = subsets(arr.slice(0, arr.length -1))
  var previousWith = previous.map(function(el){return el.concat(arr[arr.length - 1])})
  return previous.concat(previousWith)
}
console.log(subsets([1,2,3,4,5]))

function permutations(arr){
  if (arr.length === 1){return arr}
  var previous = permutations(arr.slice(0, arr.length - 1))
  var last = arr[arr.length - 1]
  var permutationsOfloop = []
  previous.forEach(function(el){
    for (var i = 0; i <= el.length; i++) {
      var left = el.slice(0, i)
      var right = el.slice(i)
      permutationsOfloop.push(left + last + right)
    }
  })
  return permutationsOfloop
}
console.log(permutations(["c","a","t","s"]))


function insertionSort(arr){
  for(var i = 0; i < arr.length; i++) {
    var keepGoing = true
    for(var j = i - 1; j >= 0 && keepGoing; j--) {
      var item = arr[j + 1]
      if( item >= arr[j]){
        keepGoing = false
      }
      if(item < arr[j]){
        arr[j+ 1] = arr[j]
        arr[j] = item
      }
    }
  }
  return arr
}
console.log(insertionSort([24,123,4,1,6,3,91]))
