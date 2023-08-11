'use strict';

{
    const smallTax = [0.13, 15000];
    const middleTax = [0.2, 50000];
    const bigTax = 0.3;

    let income = prompt('Введите свой доход: ');
    if (income !== '' && !isNaN(income)) {
        income = +income;
        if (0 < income && income <= smallTax[1]) {
            console.log(`Налог, который необходимо оплатить: ${income * smallTax[0]} ₽`);
        } else if (smallTax[1] < income && income <= middleTax[1]) {
            const secondIncome = income - smallTax[1];
            const firstTax = smallTax[1] * smallTax[0];
            const secondTax = secondIncome * middleTax[0];

            console.log(`Налоги, который необходимо оплатить:`);
            console.log(`Налоговая ставка 13%: ${firstTax} ₽`);
            console.log(`Налоговая ставка 20%: ${secondTax} ₽`);
        } else if (income > middleTax[1]) {
            const secondIncome = middleTax[1] - smallTax[1];
            const lastIncome = income - middleTax[1];
            const firstTax = smallTax[1] * smallTax[0];
            const secondTax = secondIncome * middleTax[0];
            const lastTax = lastIncome * bigTax;

            console.log(`Налог, который необходимо оплатить:`);
            console.log(`Налоговая ставка 13%: ${firstTax} ₽`);
            console.log(`Налоговая ставка 20%: ${secondTax} ₽`);
            console.log(`Налоговая ставка 30%: ${lastTax} ₽`);
        } else {
            console.log('Доход не может быть отрицательным или меньше 0');
        }
    } else {
        console.log(`Вы ввели некорректные данные`);
    }
}