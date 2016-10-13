function myFunction(amount, coins = [10,7,1]) {
	if(amount === 0){
		return []
	}

	var bestChange;

	coins.forEach( coin => {
		if(amount < coin){
			return true
		}
		var change = [coin]
		var bestChangeOfLoop = myFunction(amount - coin, coins)
		change = change.concat(bestChangeOfLoop)
		if (bestChange === undefined|| change.length < bestChange.length){
			bestChange = change
		}
	})
	return bestChange
}

var x = myFunction(14)
