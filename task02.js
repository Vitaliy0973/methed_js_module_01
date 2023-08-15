'use strict';

{
    const getAverageValue = (arr) => {
        let sum = 0;
        for (const elem of arr) {
            sum += elem;
        }

        return Math.floor(sum / arr.length);
    }

    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    console.log(getAverageValue(allСashbox));
}