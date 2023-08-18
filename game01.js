'use strict';

{
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  }

  const getUserData = (text) => {
    return prompt(`${text}: `);
  }

  const guessNumber = () => {
    let message = 'Введите число';
    let userNumber = '';
    let flag = true;
    const num = getRandomNumber();

    while (flag) {
      userNumber = getUserData(message);

      switch (true) {
        case userNumber === null:
          flag = false;
          break;
        case isNaN(userNumber):
          message = 'Введи число!';
          break;
        case userNumber === '':
          message = 'Введи число!';
          break;
        case +userNumber > num:
          message = 'Меньше! Введите число';
          break;
        case +userNumber < num:
          message = 'Больше! Введите число';
          break;
        case +userNumber === num:
          alert('Правильно!!');
          flag = false;
      }
    }
  }

  guessNumber();
}