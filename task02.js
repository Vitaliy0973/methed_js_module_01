'use strict';

{
  const createRandomList = (n, m, count) => {
    const min = n < m ? n : m;
    const max = n > m ? n : m;

    const arr = Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);

    return arr;
  }

  console.log(createRandomList(10, 20, 10));
  console.log(createRandomList(15, 5, 10));
  console.log(createRandomList(-30, -20, 10));
}