function mergeSort(arr) {
  if (arr.length < 2) {return arr;}
  let pivot = Math.floor(arr.length / 2);
  let left =  arr.slice(0, pivot);
  let right = arr.slice(pivot);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sorted = [];
  while((left.length !== 0) && (right.length !== 0)){
  if (left[0] < right[0]) {
    sorted.push(left.shift());
  }
  else {
    sorted.push(right.shift());
  }
}

  return sorted.concat(left, right);
}

mergeSort([4,2,6,9,6,1])
