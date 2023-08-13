'use strict';


const converterMoney = (euro) => {
    return euro * 1.2 * 64;
}

console.log(`1 euro = ${converterMoney(1)} руб.`)
console.log(`40 euro = ${converterMoney(40)} руб.`)
console.log(`156 euro = ${converterMoney(156)} руб.`)