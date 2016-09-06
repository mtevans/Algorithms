function quicksort(array) {
  if (array.length == 0) return [];
  let left = [];
  let right = [];
  let pivot = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    }
    else {
      right.push(array[i])
    }
  }
    return quicksort(left).concat(pivot, quicksort(right));
}

quicksort([5,2,7,9,4])
