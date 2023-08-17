'use strict';

{
  const createRandomList = (count) => {
    const arr = Array.from({ length: count }, () => Math.floor(Math.random() * (100)) + 1);
    return arr;
  }

  console.log(createRandomList(10));
}