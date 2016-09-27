function canFindZero(arr, pos = 0, seen = {}){
	if(seen[pos] || pos < 0 || pos >= arr.length){
		return false
	}
	if(arr[pos] === 0){
		return true
	}
	seen[pos] = true

	var forward = canFindZero(arr, pos += arr[pos], seen)
	var backward = canFindZero(arr, pos -= arr[pos], seen)

	return forward || backward
}

canFindZero([1, 1, 0], 0)
