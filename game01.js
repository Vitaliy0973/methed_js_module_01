'use strict';

{
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  }

  const getUserData = (text) => {
    return prompt(`${text}: `);
  }

  const guessNumber = () => {
    const num = getRandomNumber();

    let userNumber = getUserData('Введите число');

    while (true) {
      if (userNumber === null) {
        break;
      } else if (Number.isNaN(+userNumber)) {
        userNumber = getUserData('Введи число!');
      } else if (+userNumber === num) {
        alert('Правильно!!');
        break;
      } else if (+userNumber > num) {
        userNumber = getUserData('Меньше! Введите число');
      } else if (+userNumber < num) {
        userNumber = getUserData('Больше! Введите число');
      }
    }
  }

  guessNumber();
}