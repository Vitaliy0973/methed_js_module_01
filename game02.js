'use strict';

{
  const getUserData = (text) => {
    const message = 'Введи число!';
    const data = prompt(`${text}`);

    if (data === null) {
      return null;
    } else if (!Number.isNaN(parseFloat(data)) && isFinite(data)) {
      return +data;
    }

    return getUserData(message);
  };

  const getUserRound = () => {
    const messages = ['Введите первое число', 'Введите второе число'];

    return messages.reduce((intervel, message) => {
      intervel.push(intervel.includes(null) ? null : getUserData(message));

      return intervel;
    }, []);
  };

  const getRandomNumber = (n, m) => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getCount = (n, m) => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);

    return Math.round((max - min) * 0.3);
  };

  const play = (message, arrUserNumbers, num, count) => {
    if (arrUserNumbers.length === count) {
      return alert('У вас закончились попытки. Вы проиграли!!');
    }

    const userNumber = getUserData(message);

    if (userNumber === null) {
      return alert('Игра окончена!');
    } else if (arrUserNumbers.includes(userNumber)) {
      message = 'Это число вы уже вводили! Введите другое число';
    } else {
      switch (true) {
        case userNumber > num:
          message = 'Меньше! Введите число';
          break;
        case userNumber < num:
          message = 'Больше! Введите число';
          break;
        default:
          return alert('Правильно!!');
      }

      arrUserNumbers.push(userNumber);
    }

    return play(message, arrUserNumbers, num, count);
  };


  const guessNumber = () => {
    const message = 'Введите число';
    const arrUserNumbers = [];
    const [userNumberOne, userNumberTwo] = getUserRound();
    const num = getRandomNumber(userNumberOne, userNumberTwo);
    const count = getCount(userNumberOne, userNumberTwo);

    if (userNumberOne === null || userNumberTwo === null) {
      return alert('Игра окончена!');
    }

    play(message, arrUserNumbers, num, count);
  };

  guessNumber();
}
