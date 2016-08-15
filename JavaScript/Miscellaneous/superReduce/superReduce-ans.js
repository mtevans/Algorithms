function processData(input) {
  var stack = ""

    for(var i = 0; i < input.length; i++){
        if(input[i] === stack[stack.length - 1] && stack.length > 0){

          stack = stack.substring(0, stack.length - 1)

        } else {
          stack += input[i]}
    }
    console.log(stack)
    return stack
  }


console.log(processData("bba"))
