'use strict';

{
  const getUserData = (text) => {
    let message = text;
    let data;
    let flag = true;
    while (flag) {
      data = prompt(`${message}: `);

      switch (true) {
        case data === null:
          return 'stop';
        case isNaN(data):
          message = 'Введи число!';
          break;
        case data === '':
          message = 'Введи число!';
          break;
        case Number.isFinite(+data):
          flag = false;
      }
    }
    return +data;
  }

  const getRandomNumber = (n, m) => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getCount = (n, m) => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
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
    let flag = true;

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

    while (flag) {
      let userNumber = getUserData(message);

      if (userNumber === 'stop') {
        flag = false;
      }

      if (arrUserNumbers.includes(userNumber)) {
        message = 'Это число вы уже вводили! Введите другое число';
        continue;
      }

      arrUserNumbers.push(userNumber);

      switch (true) {
        case userNumber === num:
          alert('Правильно!!');
          flag = false;
          break;
        case count === 0:
          alert('Вы проиграли!!');
          flag = false;
          break;
        case userNumber > num:
          message = 'Меньше! Введите число';
          count--;
          break;
        case userNumber < num:
          message = 'Больше! Введите число';
          count--;
          break;
      }
    }
  }

  guessNumber();
}