function insertionSort(arr){
	for(var i = 0; i < arr.length; i++){
		var keepGoing = true
		for(var j = i - 1; j>= 0 && keepGoing; j--){
			let item = arr[j + 1]
			if (item >= arr[j]){
				keepGoing = false
			}
			if (item < arr[j]){
				arr[j + 1] = arr[j]
				arr[j] = item
			}
		}
	}
	return arr
}

console.log(insertionSort([24,123,4,1,6,3,91]))
