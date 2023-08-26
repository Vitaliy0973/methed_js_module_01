'use strict';

{
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const game = (message, num) => {
    const userNumber = prompt(`${message} `);
    if (userNumber === null) return alert('Игра окончена!');
    if (isNaN(userNumber) || userNumber === '') game('Введи число!', num);
    if (+userNumber > num) game('Меньше! Введите число', num);
    if (+userNumber < num) game('Больше! Введите число', num);
    if (+userNumber === num) return alert('Правильно!!');
  };

  const guessNumber = () => {
    const message = 'Введите число';
    const num = getRandomNumber();

    game(message, num);
  };

  guessNumber();
}
