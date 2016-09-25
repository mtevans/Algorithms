function commonSubstrings(string1, string2){
	var longest = ""

	for(var startIdx = 0; startIdx < string1.length; startIdx++){
		for(var len = longest.length + 1; startIdx + len < string1.length; len++){
			var onDeck = string1.slice(startIdx, startIdx + len + 1)
			if(string2.indexOf(onDeck) > -1 && onDeck.length > longest.length){
				longest = onDeck
			}
		}
	}
	return longest
}


commonSubstrings("hellp", "hello")
