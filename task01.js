'use strict';

{
    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

    const filter = (arrFirst, arrSecond) => {

        const arr = arrFirst.reduce((filteredArray, elem) => {
            if (!arrSecond.includes(elem)) {
                filteredArray.push(elem);
            }
            return filteredArray;
        }, []);

        return arr;
    }

    console.log(filter(allStudents, failedStudents));
}