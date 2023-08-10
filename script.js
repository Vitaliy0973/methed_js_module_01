'use strict'

{
  const product = 'Aser Aspire 3';
  const quantityProduct = 10;
  const category = 'laptop';
  const price = 35000;


  //  Вывод в консоль названия продукта и общей стоимости товаров
  console.log('Наименование товара:  ', product);
  console.log(`Общая сумма товаров: ${quantityProduct * price}`);
}

{
  const product = 'Hyundai CC3595FIX';
  const quantityProduct = 13;
  const category = 'fridge';
  const price = 40570;


  //  Вывод в консоль названия продукта и общей стоимости товаров
  console.log('Наименование товара: ', product);
  console.log(`Общая сумма товаров: ${quantityProduct * price}`);
}

{
  const product = prompt('Наименование товара: ');
  const quantityProduct = Number(prompt('Количество товара: '));
  const category = prompt('Категория товара: ');
  const price = Number(prompt('Цена товара в рублях: '));


  // Вывод в консоль ранее полученной от пользователя информации
  console.log(`Наименование товара: ${product}`);

  if (!Number.isFinite(quantityProduct)) {
    console.log(`Количество товара: Было введено не число`);
  } else {
    console.log(`Количество товара: ${quantityProduct}`);
  }

  console.log(`Категория товара: ${category}`);

  if (!Number.isFinite(price)) {
    console.log(`Цена товара в рублях: Было введено не число`);
  } else {
    console.log(`Цена товара в рублях: ${price}`);
  }

  console.log(`На складе ${quantityProduct} единицы товара "${product}" на сумму ${quantityProduct * price} деревянных`);
}