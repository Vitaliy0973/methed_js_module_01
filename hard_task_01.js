'use strict';

{
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

    const getAveragePriceGoods = (arr) => {

        const [totalCount, totalSum] = arr.reduce(([firstCount, firstSum], [count, sum]) => {
            return [firstCount + count, firstSum + sum];
        }, [0, 0]);

        return Math.round((totalSum / totalCount) * 100) / 100;
    }

    console.log(getAveragePriceGoods(allСashbox));
}