'use strict';

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