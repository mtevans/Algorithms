// recursive

function fib(num){
	if(num === 0){return [0]}
	if(num === 1){return [0, 1]}

	var previous = fib(num - 1)
	var lastDigit = previous[previous.length - 1] + previous[previous.length - 2]
	previous.push(lastDigit)
	return previous
}


// iterative

function fibIterative(num){
	if(num === 0){return [0]}
	if(num === 1){return [0, 1]}

	var answer = [0,1]
	var count = 1
	while(count < num){
		var toPush = answer[answer.length - 1] + answer[answer.length - 2]
		answer.push(toPush)
		count += 1
	}
	return answer
}

console.log(fibIterative(8))
