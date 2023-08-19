'use strict';

const getLeapYears = (n, m) => {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  const arr = [];

  for (let i = min; i <= max;) {
    if (!(i % 4) && (i % 100) || !(i % 400)) {
      arr.push(i);
      i += 4;
    } else {
      i += 4;
    }
  }
  return arr;
}

console.log(getLeapYears(1880, 2024));
console.log(getLeapYears(1024, -580));