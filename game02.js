'use strict';

{
    const getUserData = (text) => {
        let message = text;

        while (true) {
            let data = prompt(`${message}`);

            if (data === null) {
                return null;
            } else if (isNaN(data) || data === '') {
                message = 'Введи число!';
            } else if (Number.isFinite(+data)) {
                return +data;
            }
        }
    }


    const getUserRound = () => {
        const arr = []
        const messages = ['Введите первое число', 'Введите второе число'];
        for (let i = 0; i < 2; i++) {
            let userNumber = getUserData(messages[i]);
            if (userNumber === null) {
                return [null, null];
            }
            arr.push(userNumber);
        }
        return arr;
    }


    const getRandomNumber = (n, m) => {
        const min = Math.min(n, m);
        const max = Math.max(n, m);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const getCount = (n, m) => {
        const min = Math.min(n, m);
        const max = Math.max(n, m);
        return Math.round((max - min) * 0.3);
    }


    const guessNumber = () => {
        const arrUserNumbers = []
        let message = 'Введите число';
        // По моей логике я должен остановить программу если пользователь нажал отмена.
        // Запрашивать второе число в таком случае будет не правильно.
        // Вариант объявить пустые переменные в начале кода, а потом присвоить им
        // значения мне кажется ты забракуешь. Вот через функцию. Выглядит сложнее)
        const [userNumberOne, userNumberTwo] = getUserRound();

        if (userNumberOne === null || userNumberTwo === null) {
            return alert('Игра окончена!');
        }

        const num = getRandomNumber(userNumberOne, userNumberTwo);
        let count = getCount(userNumberOne, userNumberTwo);

        while (arrUserNumbers.length !== count) {
            let userNumber = getUserData(message);

            if (arrUserNumbers.includes(userNumber)) {
                message = 'Это число вы уже вводили! Введите другое число';
            } else {
                arrUserNumbers.push(userNumber);

                switch (true) {
                    // Не нравится мне идея запихивать это условие в эту часть кода
                    // потому, что в таком случае этот null попадет в массив arrUserNumbers.
                    case userNumber === null:
                        return alert('Игра окончена!');
                    case userNumber > num:
                        message = 'Меньше! Введите число';
                        break;
                    case userNumber < num:
                        message = 'Больше! Введите число';
                        break
                    // Мне кажется, что отсутствие явного «case userNumber === num»
                    // ухудшает читаемость кода в данном случае.
                    default:
                        return alert('Правильно!!');
                }
            }
        }

        alert('У вас закончились попытки. Вы проиграли!!');
    }

    guessNumber();
}