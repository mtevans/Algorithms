"use strict";


/// mergeSort
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

///// quicksort

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


///subsets
function subSets(arr) {
  if (arr === []) { return [[]]; }
  if (arr.length === 1) { return ([ [], [ arr[0] ] ]); }
  let previous = subSets(arr.slice(0, arr.length-1));

  let previousWithLast = previous.map(el => el.concat(arr[arr.length - 1]));
  return previous.concat(previousWithLast);
}

console.log(subSets([1,2,3]));


//// bsearch

function bSearch(array, target) {
  if (array.length === 0) { return null; }
  let mid = Math.floor(array.length / 2);

  if (target === array[mid]) {
    return mid;
    }
  else if (target < array[mid]) {
    return bSearch(array.slice(0, mid), target);
    }
  else {
    let answer = bSearch(array.slice(mid + 1, array.length), target);

    if (answer !== null) { return (mid + 1) + answer; }
    else { return answer;}
  }

}


bSearch([2, 4, 6, 8, 10], 6);

/// bubbleSort

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



Array.prototype.uniq = function () {
  let results = [];
  for (let i = 0; i < this.length; i++) {
    if (results.indexOf(this[i]) === -1) {
      results.push(this[i]);
    }
  }
  return results;
};

[1,2,3,4,5,5].uniq();
// twoSum

Array.prototype.two_sum = function () {
  let results = [];
  for (let i = 0; i < this.length; i++){
    for (let j = i + 1; j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          results.push([i, j]);
        }
    }
  }
  return results;
}
[-1,1,4,5,-4].two_sum();


// transpose

Array.prototype.my_transpose = function () {
  let results = [];
  for (let i = 0 ; i < this[0].length; i++){
    let sub_arr = [];
    this.forEach(function(el) {
      sub_arr.push(el[i]);
    });
    results.push(sub_arr);
  }

  return results
}

[[0, 1, 2],[3, 4, 5],[6, 7, 8]].my_transpose();


// myEach

Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++){
    func(this[i]);
  }
};

function print(arg) {
  console.log(arg);
}

// [1,2,3,4,5].myEach(console.log);



//myMap

Array.prototype.myMap = function (func) {
  let results = [];
  this.myEach(el => results.push(func(el)))
  return results;
};

function addTwo(arg) {
  return arg + 2;
}

[1,2,3,4,5].myMap(addTwo);


// my transpose

Array.prototype.myTranspose = function () {
  let results = [];
  let span = this[0].length;
  if (this.length > this[0].length){ let span = this.length ;}


  for (let i = 0 ; i < span; i++){
    let sub_arr = [];
    this.forEach(function(el) {
      sub_arr.push(el[i]);
    });
    results.push(sub_arr);
  }

  return results
}

[[0, 1, 2],[3, 4, 5],[6, 7, 8]].myTranspose();
[[0, 1],[3, 4],[6, 7]].myTranspose();

// two_sum

Array.prototype.two_sum = function () {
  let results = [];
  for (let i = 0; i < this.length; i++){
    for (let j = i + 1; j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          results.push([i, j]);
        }
    }
  }
  return results;
}
[-1,1,4,5,-4].two_sum();


//// myinject
Array.prototype.myInject = function (func) {
  let result = this[0];

  this.slice(1).forEach(element => result = func(result, element) );

  return result;
};

[1,2,3,4,5].myInject( (total, item) => total + item );

//// rotate
function my_rotate(array, num) {
  let answer = array;
  let shift =  num % answer.length;
  if (num < 0) { shift = (answer.length - (Math.abs(num) % answer.length) );}
  for (var i = 0; i < shift; i++) {
    array.push(array.shift());
  }
  return answer;
}

my_rotate([1,2,3,4],2);

//// make change

function makeChange(num, coins) {
  if (num === 0) { return []; }

  let finalCoins = [];
  coins.forEach( (coin, index) =>  {
    if (coin <= num) {
      let thisChange = makeChange(num - coin, coins.slice(index));
      finalCoins.push(thisChange.concat(coin));
    }
  } );
  finalCoins.sort((a, b) => a.length - b.length );
  return finalCoins[0];
}


makeChange(14, [10, 7, 1]);



///curry

Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

///curriedSum

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach((n) => { total += n; });

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.myBind1 = function (ctx) {
  const fn = this;
  const bindArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    const callArgs = Array.prototype.slice.call(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};
