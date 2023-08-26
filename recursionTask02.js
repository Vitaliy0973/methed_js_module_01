'use strict';

{
  const recursion = (arr, max = 10, min = 0) => {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    if (arr.reduce((accum, item) => accum + item) >= 50) return arr;
    return recursion(arr);
  };

  console.log(recursion([1, 2, 3]));
}
