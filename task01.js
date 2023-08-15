'use strict';

const filter = (arrFirst, arrSecond) => {
    const arr = [];
    for (const elem of arrFirst) {
        if (!arrSecond.includes(elem)) arr.push(elem);
    }

    return arr;
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudents, failedStudents));