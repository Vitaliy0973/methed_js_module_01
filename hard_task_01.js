'use strict';

const divisorSearch = (x, y, i = y) => ((x % i + y % i) === 0) ? i : divisorSearch(x, y, (i - 1));

console.log(divisorSearch(60, 93));
console.log(divisorSearch(60, 54));
console.log(divisorSearch(60, 18));