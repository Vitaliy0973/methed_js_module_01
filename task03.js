'use strict';

{
  const getEvenList = (min, max, count) => {
    const arr = Array.from({ length: count }, (item) => {
      do {
        item = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (item % 2);
      return item;
    });
    return arr;
  }

  const getOddList = (min, max, count) => {
    const arr = Array.from({ length: count }, (item) => {
      do {
        item = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (!(item % 2));
      return item;
    });
    return arr;
  }

  const createRandomList = (n, m, count, parity) => {
    let arr;
    const min = n < m ? n : m;
    const max = n > m ? n : m;

    if (parity === 'even') {
      arr = getEvenList(min, max, count);
    }

    if (parity === 'odd') {
      arr = getOddList(min, max, count);
    }

    return arr;
  }

  console.log(createRandomList(1, 20, 10, 'even'));
  console.log(createRandomList(25, 5, 10, 'odd'));
  console.log(createRandomList(-30, -10, 10, 'even'));
}