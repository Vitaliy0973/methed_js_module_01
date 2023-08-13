'use strict';

const num_1 = +(prompt('Введите число 1: '));
const num_2 = +(prompt('Введите число 2: '));

const searchMinNumber = (num_1, num_2) => {
    return (+(num_1 < num_2)) * num_1 + (+(num_2 < num_1)) * num_2;
}

console.log(searchMinNumber(num_1, num_2));