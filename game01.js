'use strict';

{
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const game = (message, num) => {
    const userNumber = prompt(`${message} `);

    switch (true) {
      case userNumber === null:
        alert('Игра окончена!');
        return;
      case isNaN(userNumber):
      case userNumber.trim() === '':
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
        return;
    }
    game(message, num);
  };

  const guessNumber = () => {
    const message = 'Введите число';
    const num = getRandomNumber();

    game(message, num);

    return num;
  };

  console.log(guessNumber());
}
