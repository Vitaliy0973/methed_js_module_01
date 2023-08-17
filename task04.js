'use strict';

const getLeapYears = (n, m) => {

  const arr = Array.from({ length: m - n + 1 }, (item, index) => {
    return n + index;
  }).filter((item) => !(item % 4) && (item % 100) || !(item % 400));

  return arr;
}

console.log(getLeapYears(1880, 2024));