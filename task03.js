'use strict';

{
    const addPrefix = (arr, str) => {
        const result = [];

        for (const elem of arr) {
            result.push(`${str} ${elem}`);
        }

        return result;
    }

    const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    console.log(addPrefix(names, 'Mr'));
}