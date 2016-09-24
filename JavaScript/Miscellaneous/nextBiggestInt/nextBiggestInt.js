function lowestHigher(num, arrayOfInts){
	var answerIdx;
	var ansRemains = 10
	arrayOfInts.forEach(function(el, idx){
		var remains = el - num
		if(remains !== 0 && remains < ansRemains){
			ansRemains = remains
			answerIdx = idx
		}
	})
	return answerIdx
}

function nextBiggest(num){
  var numArr = (num + "").split("")
  var keepGoing = true
  for(var i = numArr.length - 2; i >= 0 && keepGoing; i--){
 	var previous = numArr[i + 1]
 	var current = numArr[i]
 	if(previous > current){
 		var toSwitchIdx = i + 1 + lowestHigher(current, numArr.slice(i + 1))
 		var hold = numArr[toSwitchIdx]
 	 	numArr[toSwitchIdx] = current
 	 	numArr[i] = hold
 		keepGoing = false
 		break
 	}
  }
  if(keepGoing){
  	return "highest possible digits"
  }
  var sortRight = numArr.slice(i + 1).sort(function(a,b){
  	return a > b? 1: - 1;
  })
  return numArr.slice(0,i+1).concat(sortRight).join("")
}

nextBiggest(243)
