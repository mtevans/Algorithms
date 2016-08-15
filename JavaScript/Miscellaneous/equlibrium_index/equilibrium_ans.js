// Equilibrium index of an array is an index such that the sum of elements at
// lower indexes is equal to the sum of elements at higher indexes. For example, in an array A:
//
// A[0] = -7, A[1] = 1, A[2] = 5, A[3] = 2, A[4] = -4, A[5] = 3, A[6]=0
//
// 3 is an equilibrium index, because:
// A[0] + A[1] + A[2] = A[4] + A[5] + A[6]
//
// 6 is also an equilibrium index, because sum of zero elements is zero, i.e.,
// A[0] + A[1] + A[2] + A[3] + A[4] + A[5]=0
//
// 7 is not an equilibrium index, because it is not a valid index of array A.
//
// Write a function int equilibrium(int[] arr, int n); that given a sequence arr[]
 // of size n, returns an equilibrium index (if any) or -1 if no equilibrium indexes exist.

function equilibriumIndex(arr) {
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
  if (ans.length === 0) {
    return -1
  } else {
    return ans
  }
}


console.log(equilibriumIndex([-1, 3, -4, 5, 1, -6, 2, 1]))
// [ 1, 3, 7 ]

console.log(equilibriumIndex([1, 2, 1]))
// [ 1 ]
