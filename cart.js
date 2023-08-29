'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,
  add(name, price, count) {
    this.items.push({ name, price, count });
    this.increaseCount(count);
  },
  increaseCount(num) {
    this.count += num;
  },
  calculateItemPrice() {
    const totalPrice = this.items.reduce((sum, item) =>
      sum + (item.price * item.count), 0);
    if (this._discount > 0) {
      return totalPrice - (totalPrice * this._discount / 100);
    }
    return totalPrice;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this._discount = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set discount(promocode) {
    if (promocode === 'METHED') this._discount = 15;
    if (promocode === 'NEWYEAR') this._discount = 21;
  },
};


cart.add('sony', 11500, 3);
cart.add('samsung', 25090, 2);
cart.add('xiaomi', 3450, 9);

// cart.discount = 'METHED';
cart.discount = 'NEWYEAR';
cart.print();
