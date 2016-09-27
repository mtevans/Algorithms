function moveZeros(arr){
	 var zeroCount = 0
	 var idx = 0
	 while(idx < arr.length && (arr.length - zeroCount - idx > 0)){
	 	if(arr[idx] === 0){
	 		arr[idx] = arr[arr.length - 1 - zeroCount]
	 		arr[arr.length - 1 - zeroCount] = 0
	 		zeroCount += 1
	 	}else{
	 	  idx +=1
	 	}
	 }
	 return arr
}

moveZeros([0, 1,1,0,0,1])
