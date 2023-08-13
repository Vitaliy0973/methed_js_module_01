'use strict';

const divisorSearch = (num_1, num_2) => {
    return ((num_1 % num_2) === 0) ? num_2 : divisorSearch(num_1, (num_2 - 1));
}

console.log(divisorSearch(60, 93));
console.log(divisorSearch(60, 54));
console.log(divisorSearch(60, 18));