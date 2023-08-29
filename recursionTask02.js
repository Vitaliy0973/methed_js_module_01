'use strict';

{
  const recursion = (arr) => {
    const newArr = [Math.floor(Math.random() * 11), ...arr];

    return newArr.reduce((accum, item) => accum + item) >= 50 ?
      newArr : recursion(newArr);
  };

  console.log(recursion([1, 2, 3]));
}
