'use strict';

{
  const smallTax = [0.13, 15000];
  const middleTax = [0.2, 50000];
  const bigTax = 0.3;

  let income = prompt('Введите свой доход: ');
  if (income !== '' && !isNaN(income)) {
    income = +income;
    if (0 < income && income < smallTax[1]) {
      console.log(`Налог, который необходимо оплатить: ${income * smallTax[0]} ₽`);
    } else if (smallTax[1] <= income && income < middleTax[1]) {
      console.log(`Налог, который необходимо оплатить: ${income * middleTax[0]} ₽`);
    } else if (income >= middleTax[1]) {
      console.log(`Налог, который необходимо оплатить: ${income * bigTax} ₽`);
    } else {
      console.log('Доход не может быть отрицательным или меньше 0');
    }
  } else {
    console.log(`Вы ввели некорректные данные`);
  }
}

console.log('');