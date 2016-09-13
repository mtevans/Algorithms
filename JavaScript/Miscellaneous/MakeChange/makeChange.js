function myFunction(amount, coins = [3,2,1]) {
	if(amount === 0){
		return []
	}

	var bestChange = "hello"

	coins.forEach( coin => {
		if(amount < coin){
			return true
		}
		var change = [coin]
		var bestChangeOfLoop = myFunction(amount - coin, coins)
		change = change.concat(bestChangeOfLoop)
		if (bestChange === "hello" || change.length < bestChange.length){
			bestChange = change
		}
	})
	return bestChange
}

var x = myFunction(10)
