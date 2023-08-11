'use strict';

{
  const product = 'Aser Aspire 3';
  const quantityProduct = 10;
  const category = 'laptop';
  const price = 35000;


  //  Вывод в консоль названия продукта и общей стоимости товаров
  console.log('Наименование товара:  ', product);
  console.log(`Общая сумма товаров: ${quantityProduct * price}`);
}

console.log('');

{
  const product = 'Hyundai CC3595FIX';
  const quantityProduct = 13;
  const category = 'fridge';
  const price = 40570;


  //  Вывод в консоль названия продукта и общей стоимости товаров
  console.log('Наименование товара: ', product);
  console.log(`Общая сумма товаров: ${quantityProduct * price}`);
}

console.log('');

{
  let flag = true;
  switch (true) {
    case true:
      const product = prompt('Наименование товара: ');
    case true:
      let quantityProduct = prompt('Количество товара: ');
      if (quantityProduct !== '' && !isNaN(quantityProduct)) {
        quantityProduct = +quantityProduct;
      } else {
        console.log(`Вы ввели некорректные данные`);
        break;
      }
    case true:
      const category = prompt('Категория товара: ');
    case true:
      let price = prompt('Цена товара в рублях: ');
      if (price !== '' && !isNaN(price)) {
        price = +price;
      } else {
        console.log(`Вы ввели некорректные данные`);
        break;
      }
    default:
      console.log('product ', typeof product);
      console.log('quantityProduct ', typeof quantityProduct);
      console.log('category ', typeof category);
      console.log('price ', typeof price);
      console.log(`На складе ${quantityProduct} единицы товара "${product}" на сумму ${quantityProduct * price} деревянных`);
  }
}

console.log('');