function equilibrium(arr) {
   var left = 0
   var right = 0
   var ans = []
   arr.forEach(el => right += el)

    for(var i=0; i< arr.length; i++){
        if (i > 0){
            left += arr[i - 1]

        }
        right -= arr[i]

        if (right === left){
           ans.push(i)
        }

    }
 return ans
}

console.log(equilibrium([-1, 3, -4, 5, 1, -6, 2, 1]))

console.log(equilibrium([1, 2, 1]))
