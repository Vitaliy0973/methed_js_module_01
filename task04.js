'use strict';

const calculate = (Price, quantityProducts, promo) => {
    let totalPrice = Price;

    if (quantityProducts > 10) totalPrice -= totalPrice * 0.03;

    if (totalPrice > 30000) totalPrice -= (totalPrice - 30000) * 0.15;

    if (promo === 'METHED') totalPrice -= totalPrice * 0.1;

    if (promo === 'G3H2Z1') {
        if (totalPrice > 2000) totalPrice -= 500;
    }

    return totalPrice;
}

console.log(calculate(35000, 15, 'METHED'));
console.log(calculate(35000, 15, 'G3H2Z1'));