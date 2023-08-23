'use strict';

import { listIPv4 } from './ipv4.js';

const getListUnicIp = (arr) => {
    const testSet = new Set(arr);
    return testSet.size;
}

console.log(getListUnicIp(listIPv4));