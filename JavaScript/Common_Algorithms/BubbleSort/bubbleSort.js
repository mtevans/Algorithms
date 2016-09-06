function bubbleSort(arr) {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + 1;
      if (arr[i] > arr[j]) {
        let b = arr[i];
        arr[i] = arr[j];
        arr[j] = b;
        sorted = false;
      }
    }
  }
  return arr;
}

bubbleSort([3,2,5,6]);
