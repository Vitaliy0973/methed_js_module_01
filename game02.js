'use strict';

{
    const getUserData = (text) => {
        let message = text;
        let data;
        while (true) {
            data = prompt(`${message}: `);
            if (data === null) {
                return 'stop';
            } else if (Number.isNaN(+data)) {
                message = 'Введи число!'
                continue;
            } else if (data === '') {
                message = 'Введи число!'
                continue;
            } else if (Number.isFinite(+data)) {
                break;
            }
        }
        return +data;
    }

    const getRandomNumber = (n, m) => {
        const min = n < m ? n : m;
        const max = n > m ? n : m;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getCount = (n, m) => {
        const min = n < m ? n : m;
        const max = n > m ? n : m;
        let count = max - min;
        if (count >= 50 && count <= 100) {
            count = 15;
        } else {
            count = Math.round(count * 0.3);
        }
        return count;
    }

    const guessNumber = () => {
        const arrUserNumbers = []
        let message = 'Введите число';

        let userNumberOne = getUserData('Введите первое число');
        if (userNumberOne === 'stop') {
            return;
        }

        let userNumberTwo = getUserData('Введите второе число');
        if (userNumberTwo === 'stop') {
            return;
        }

        const num = getRandomNumber(userNumberOne, userNumberTwo);
        let count = getCount(userNumberOne, userNumberTwo);

        console.log('num: ', num);

        while (true) {
            let userNumber = getUserData(message);

            if (userNumber === 'stop') {
                break;
            }

            if (arrUserNumbers.includes(userNumber)) {
                message = 'Это число вы уже вводили! Введите другое число';
                continue;
            }

            arrUserNumbers.push(userNumber);

            console.log('count: ', count);
            console.log('arrUserNumbers: ', arrUserNumbers);

            if (userNumber === num) {
                alert('Правильно!!');
                break;
            } else if (count === 0) {
                alert('Вы проиграли!!');
                break;
            } else if (userNumber > num) {
                count--;
                message = 'Меньше! Введите число';
            } else if (userNumber < num) {
                count--;
                message = 'Больше! Введите число';
            }
        }
    }

    guessNumber();
}