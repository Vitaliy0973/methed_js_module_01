'use strict';

{
    const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    const addPrefix = (arr, str) => {
        return arr.map((elem) => `${str} ${elem}`);
    }

    console.log(addPrefix(names, 'Mr'));
}