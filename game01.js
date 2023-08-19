'use strict';

{
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  }

  const guessNumber = () => {
    let message = 'Введите число';
    const num = getRandomNumber();

    while (true) {
      let userNumber = prompt(`${message} `);

      switch (true) {
        case userNumber === null:
          return alert('Игра окончена!');
        case isNaN(userNumber):
        case userNumber === '':
          message = 'Введи число!';
          break;
        case +userNumber > num:
          message = 'Меньше! Введите число';
          break;
        case +userNumber < num:
          message = 'Больше! Введите число';
          break;
        default:
          alert('Правильно!!');
      }
    }
  }

  guessNumber();
}