


function weightedRandomIndex(arr){
	var sum = 0
	arr.forEach(function(el){
		sum += el
	})
	var value = Math.floor(Math.random() * sum)
	console.log(sum, value)
	var cumulative = 0
	for(var i = 0; i < arr.length; i++){
		cumulative += arr[i]
		console.log("check-out " + cumulative)
		if( value < cumulative){
			return i
		}
	}
}
weightedRandomIndex([4,6,8])
