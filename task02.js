'use strict';

{
    const getAverageValue = (arr) => {
        const totalSum = arr.reduce((sum, elem) => sum + elem);

        return Math.floor(totalSum / arr.length);
    }

    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    console.log(getAverageValue(allСashbox));
}