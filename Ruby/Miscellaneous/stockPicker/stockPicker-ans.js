function myFunction(arg) {
    var lowest = arg[0]
    var greatestDifference;

   	for(var i = 1; i < arg.length; i++){
       console.log(arg[i] - lowest)
    	if (greatestDifference === undefined || (arg[i] - lowest) > greatestDifference){
        	greatestDifference = arg[i] - lowest
        }
        if (arg[i] < lowest){
        	lowest = arg[i]
        }


    }
     return greatestDifference

}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([100, 99, 90, 80, 70, 60]));
