'use strict';

{
    const data = {
        tax: {
            smallTax: 0.13,
            middleTax: 0.2,
            bigTax: 0.3,
        },
        limit: {
            lowLimit: 15000,
            heightLimit: 50000,
        }
    }

    let userTax = 0;

    let remainder = prompt('Введите свой доход: ');

    if (remainder <= 0) {
        console.log(`Налог, который необходимо оплатить: 0 ₽`);
    } else {
        if (remainder > data.limit.heightLimit) {
            userTax = (remainder - data.limit.heightLimit) * data.tax.bigTax;
            remainder = data.limit.heightLimit;
        }

        if (remainder > data.limit.lowLimit) {
            userTax += (remainder - data.limit.lowLimit) * data.tax.middleTax;
            remainder = data.limit.lowLimit;
        }

        if (remainder <= data.limit.lowLimit) {
            userTax += remainder * data.tax.smallTax;
        }

        console.log(`Налог, который необходимо оплатить: ${userTax} ₽`);
    }
}