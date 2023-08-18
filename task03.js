'use strict';

{
  const createRandomList = (count, n, m, parity = '') => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    const arr = Array.from({ length: count }, (item, index) => {
      item = Math.floor(Math.random() * (max - min)) + min;
      switch (parity) {
        case 'even':
          !(item % 2) ? item : item++;
          break;
        case 'odd':
          item % 2 ? item : item++;
      }
      return item;
    });

    return arr;
  }

  console.log(createRandomList(10, 1, 21, 'even'));
  console.log(createRandomList(10, 1, 21, 'odd'));
  console.log(createRandomList(10, 1, 21));
  console.log(createRandomList(10, 25, 5, 'odd'));
  console.log(createRandomList(10, -30, -10, 'even'));
}