'use strict';

const x = +(prompt('Введите число 1: '));
const y = +(prompt('Введите число 2: '));

const searchMinNumber = (x, y) => (+(x < y)) * x + (+(y < x)) * y;

console.log(searchMinNumber(x, y));