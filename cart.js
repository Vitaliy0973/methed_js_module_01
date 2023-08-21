'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice;
    },
    add(name, price, count) {
        this.items.push({ name, price, count });
        this.increaseCount(count);
        this.calculateItemPrice();
    },
    increaseCount(num) {
        this.count += num;
    },
    calculateItemPrice() {
        this.totalPrice = this.items.reduce((sum, item) => sum + (item.price * item.count), 0);
    },
    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
    },
}

cart.add('sony', 11500, 3)
cart.add('samsung', 25090, 2)
cart.add('xiaomi', 3450, 9)
cart.print();
cart.clear();
cart.print();
