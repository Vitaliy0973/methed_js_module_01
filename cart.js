'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  add(name, price, count) {
    this.items.push({name, price, count});
    this.increaseCount(count);
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    const totalPrice = this.items.reduce((sum, item) =>
      sum + (item.price * item.count), 0);
    if (this.discount > 0) {
      return totalPrice - (totalPrice * this.discount / 100);
    }
    return totalPrice;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') this.discount = 15;
    if (promocode === 'NEWYEAR') this.discount = 21;
  },
};


cart.add('sony', 11500, 3);
cart.add('samsung', 25090, 2);
cart.add('xiaomi', 3450, 9);

// cart.setDiscount = 'METHED';
cart.setDiscount = 'NEWYEAR';
cart.print();
