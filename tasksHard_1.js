'use strict';

{
  const smallTax = 0.13;
  const middleTax = 0.2;
  const bigTax = 0.3;
  const lowLimit = 15000;
  const heightLimit = 50000;

  let income = prompt('Введите свой доход: ');

  if (income >= lowLimit) {
    if (income >= heightLimit) {
      console.log(`Налог, который необходимо оплатить: ${income * bigTax} ₽`);
    } else {
      console.log(`Налог, который необходимо оплатить: ${income * middleTax} ₽`);
    }
  } else if (income > 0) {
    console.log(`Налог, который необходимо оплатить: ${income * smallTax} ₽`);
  } else {
    console.log(`Налог, который необходимо оплатить: 0 ₽`);
  }
}