'use strict';

const isPrime = (userNum) => {
    if (userNum < 2) return false;

    for (let i = 2; i <= userNum; i++) {
        if (i === userNum) return true;
        if (!(userNum % i)) return false;
    }
}

console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(12));
console.log(isPrime(11));
console.log(isPrime(0));
console.log(isPrime(-1));
console.log(isPrime(1987));