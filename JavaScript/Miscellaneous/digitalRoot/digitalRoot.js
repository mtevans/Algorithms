function digitalRoot(num){
	var sum = num
	while(sum >= 10){
		sum = digitalRootHelper(sum)
	}
	return sum
}

function digitalRootHelper(num){
	var miniSum = 0
	while (num > 0){
		miniSum += num % 10
		num = Math.floor(num /10)
	}
	return miniSum
}


digitalRoot(89)
