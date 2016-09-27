function shuffle(arr){
	arr.forEach(function(el, idx){
		var rand = idx + Math.floor(Math.random() * (arr.length - idx))
		var hold = arr[idx]
		arr[idx] = arr[rand]
		arr[rand] = hold
	})
	return arr
}

shuffle([2,4, 6, 8, 10, 11, 15,167])
