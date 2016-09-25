function caesarCipher(string, distance){
	var startingOrd = "a".charCodeAt(0)
	var stringArr = string.split("")
	for(var i = 0; i< string.length; i++){
		var ord = string.charCodeAt(i)
		var temp = (ord - startingOrd + distance) % 26
		if(temp < 0){
			temp = 27 + temp
		}
		var newOrd =  temp + startingOrd
		stringArr[i] = String.fromCharCode(newOrd)
	}
	return stringArr.join("")
}

caesarCipher("aa", 29 )
// String.fromCharCode(64)
// String.charCodeAt(0)
