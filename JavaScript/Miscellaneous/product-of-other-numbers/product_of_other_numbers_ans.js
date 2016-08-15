
function getProductsOfAllIntsExceptAtIndex(arr){
	var product = 1;
	var answer = [];
	for(var i = 0; i < arr.length; i++){

		answer[i]= product
			product *= arr[i]
	}
	var previous = 1;

	for(var j = arr.length - 1; j >= 0; j--){

		answer[j] *= previous
		previous *= arr[j]
	}



	return answer;
}


console.log(getProductsOfAllIntsExceptAtIndex([2,4,10]))



// 
// answer with explanation below
function getProductsOfAllIntsExceptAtIndex(arr) {

    var productsOfAllIntsExceptAtIndex = [];

    // for each integer, we find the product of all the integers
    // before it, storing the total product so far each time
    var productSoFar = 1;
    for (var i = 0; i < arr.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= arr[i];
    }

    // for each integer, we find the product of all the integers
    // after it. since each index in products already has the
    // product of all the integers before it, now we're storing
    // the total product of all other integers
    productSoFar = 1;
    for (var j = arr.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= arr[j];
    }

    return productsOfAllIntsExceptAtIndex;
}
