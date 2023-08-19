'use strict';

{
  const createRandomList = (length, n, m, parity = '') => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    const option = parity === 'even' || parity === 'odd' ? 0 : 1;

    const arr = Array.from({ length }, (item, index) => {
      item = Math.floor(Math.random() * (max - min + option)) + min;

      if (parity === 'even') {
        !(item % 2) ? item : item++;
      } else if (parity === 'odd') {
        item % 2 ? item : item++;
      }

      return item;
    });

    return arr;
  }

  // console.log(createRandomList(10, 1, 21, 'even'));
  // console.log(createRandomList(10, 1, 21, 'odd'));
  // console.log(createRandomList(10, 1, 21));
  // console.log(createRandomList(10, 25, 5, 'odd'));
  // console.log(createRandomList(10, -30, -10, 'even'));

  for (let i = 0; i < 1000; i++) {
    if (createRandomList(99, -10, 10).includes(10)) {
      console.log('!!!')
    }
  }
}