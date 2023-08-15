'use strict';

{
    const getAveragePriceGoods = (arr) => {
        let sum = 0;
        let products = 0

        for (const elem of arr) {
            products += elem[0]
            sum += elem[1]
        }
        return Math.round((sum / products) * 100) / 100;
    }

    const allСashbox = [
        [12, 4500],
        [7, 3210],
        [4, 650],
        [3, 1250],
        [9, 7830],
        [1, 990],
        [6, 13900],
        [1, 370],
    ];

    console.log(getAveragePriceGoods(allСashbox));
}