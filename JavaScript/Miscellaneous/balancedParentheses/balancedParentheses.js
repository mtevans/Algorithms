function balancedParentheses(string){
  var parenthStack = []
  var openParenth = { "(": true, "{": true, "[": true}
  var closingParenth = { ")": "(", "}": "{", "]": "["}
  for (var i = 0; i < string.length; i++) {
    var char = string[i]
    if(openParenth[char]){
      parenthStack.push(char)
    }else if(closingParenth[char]){
      if(closingParenth[char] !== parenthStack[parenthStack.length - 1]){
        return false
      } else (
        parenthStack.pop()
      )
    }
  }
  
  if(parenthStack.length){
    return false
  } else {
    return true
  }
}



console.log(balancedParentheses("(){}({[]})"))
