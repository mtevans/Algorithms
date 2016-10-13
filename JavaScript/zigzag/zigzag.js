function zigzag(arr){
	var current = [];
	var best = [];

	for(var i=1 ; i < arr.length; i++){
		var current_diff = arr[i-1] - arr[i]
		var prev_diff = current[current.length - 1]
		if((prev_diff < 0 && current_diff > 0) || (prev_diff > 0 && current_diff < 0) || !prev_diff ){
			current.push(current_diff)
			if(current.length > best.length){
				current = best
			}
		} else{
			current = []
		}
	}
	return best

}


zigzag([1,5,3,2,5,3,7,1,9])
