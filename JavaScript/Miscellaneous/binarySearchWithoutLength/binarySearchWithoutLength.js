function bsearchNoLength(target, arr){
  var idx = 1
  while(true){
  	if(arr[idx] === target){
  		return idx
  	} else if(arr[idx] === undefined || arr[idx] > target){
  		break
  	}
    idx *= 2
  }
  return bsearch(target, arr.slice(0,idx))
}

function bsearch(target, arr){
	if(!arr.length){return null}
	var pivot = Math.floor(arr.length / 2)
	if(target === arr[pivot]){
		return pivot
	} else if(target < arr[pivot]){
		return bsearch(target, arr.slice(0, pivot))
	} else {
		var answer = bsearch(target, arr.slice(pivot + 1))
		if(answer === null){
			return answer
		} else {
			return answer + 1 + pivot
		}
	}
}

console.log(bsearchNoLength(9, [1,2,3,4,5,6,7,8,9,10]))
