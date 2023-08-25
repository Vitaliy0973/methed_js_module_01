'use strict';

const cart = {
  items: [],
  count: 0,
  add(name, price, count) {
    this.items.push({name, price, count});
    this.increaseCount(count);
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    return this.items.reduce((sum, item) => sum + (item.price * item.count), 0);
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
};

cart.add('sony', 11500, 3);
cart.add('samsung', 25090, 2);
cart.add('xiaomi', 3450, 9);
cart.print();
cart.clear();
cart.print();

// http://joxi.ru/mobpvxQtlBJRpr
