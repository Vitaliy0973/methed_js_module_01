'use strict';

{
    const addPrefix = (arr, str) => {
        return arr.map((elem) => `${str} ${elem}`);
    }

    const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    console.log(addPrefix(names, 'Mr'));
}